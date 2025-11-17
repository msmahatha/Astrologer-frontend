import { create } from 'zustand';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

const useAIStore = create((set, get) => ({
  chats: [],
  isLoading: false,
  isTyping: false,  // NEW: Shows typing indicator
  error: null,
  userInfo: null,
  hasShownIntro: false,

  // Fetch chat history from backend
  fetchChats: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`${API_BASE}/api/astro/history`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message || data?.error || 'Failed to fetch chat history';
        set({ chats: [], isLoading: false, error: message });
        return { success: false, message };
      }

      const questions = data?.data?.questions || data?.questions || data?.data || [];

      const normalized = Array.isArray(questions)
        ? questions.map(q => ({ 
            question: q.question || q.q || q.userQuestion || '', 
            answer: q.answer || q.response || '',
            remedy: q.remedy || '',
            isTyping: false
          }))
        : [];

      set({ chats: normalized, isLoading: false, error: null });
      return { success: true, data: normalized };
    } catch (err) {
      console.error('Error fetching chats:', err);
      set({ chats: [], isLoading: false, error: err.message });
      return { success: false, message: err.message };
    }
  },

  // Set user info in store
  setUserInfo: (userInfo) => {
    set({ userInfo });
    return { success: true };
  },

  // Set intro as shown
  setIntroShown: () => {
    set({ hasShownIntro: true });
    return { success: true };
  },

  // Reset user info
  clearUserInfo: () => {
    set({ userInfo: null, hasShownIntro: false });
    return { success: true };
  },

  sendMessage: async (messageData) => {
    set({ error: null });

    const { question, context, ragWithContext, userInfo } = messageData;

    if (!question || question.trim() === '') {
      const msg = 'No question provided';
      console.warn(msg);
      return { success: false, message: msg };
    }

    try {
      // Step 1: Add user message immediately
      const userMessage = { 
        question: question.trim(), 
        answer: '',
        remedy: '',
        isTyping: false
      };

      set(state => ({ 
        chats: [...state.chats, userMessage], 
        isLoading: true
      }));

      // Step 2: Show typing indicator briefly (simulating "AI is typing")
      // Wait 1.5 seconds before showing response
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Step 3: Call backend API
      const res = await fetch(`${API_BASE}/api/astro/ask`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: question, 
          context: context || '', 
          ragWithContext: ragWithContext || true,
          userInfo: userInfo || null
        })
      });

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message || data?.error || 'Request failed';
        set(state => ({
          chats: state.chats.map((chat, index) => 
            index === state.chats.length - 1 
              ? { ...chat, answer: `⚠️ Error: ${message}`, isTyping: false }
              : chat
          ),
          isLoading: false,
          error: message
        }));
        return { success: false, message };
      }

      const payload = data?.data || data;

      console.log('Response received:', {
        answer: payload.answer?.substring(0, 50) + '...',
        remedy: payload.remedy?.substring(0, 50) + '...',
        isSMSFormatted: payload.isSMSFormatted
      });

      // Step 4: Update last chat with response (already SMS-formatted from backend)
      set(state => ({
        chats: state.chats.map((chat, index) => 
          index === state.chats.length - 1 
            ? { 
                ...chat, 
                answer: payload.answer || 'No response received',
                remedy: payload.remedy || '',
                isTyping: false
              }
            : chat
        ),
        isLoading: false,
        isTyping: false
      }));

      return { success: true, data: payload };

    } catch (err) {
      console.error('Error sending message:', err);
      set(state => ({
        chats: state.chats.map((chat, index) => 
          index === state.chats.length - 1 
            ? { 
                ...chat, 
                answer: '😔 Sorry, something went wrong. Please try again.',
                isTyping: false
              }
            : chat
        ),
        isLoading: false,
        isTyping: false,
        error: err.message
      }));
      return { success: false, message: err.message };
    }
  }
}));

export default useAIStore;
