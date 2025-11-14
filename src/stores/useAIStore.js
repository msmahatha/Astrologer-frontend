// import { create } from 'zustand';

// const API_BASE = 'http://localhost:5000';

// const useAIStore = create((set, get) => ({
//   chats: [],
//   isLoading: false,
//   error: null,
//   userInfo: null,
//   hasShownIntro: false,

//   // Fetch chat history from backend and normalize to { question, answer }
//   fetchChats: async () => {
//     set({ isLoading: true, error: null });
//     try {
//       const res = await fetch(`${API_BASE}/api/astro/history`, {
//         method: 'GET',
//         credentials: 'include',
//         headers: { 'Content-Type': 'application/json' }
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         const message = data?.message || data?.error || 'Failed to fetch chat history';
//         set({ chats: [], isLoading: false, error: message });
//         return { success: false, message };
//       }

//       // normalize different backend shapes
//       const questions = data?.data?.questions || data?.questions || data?.data || [];

//       const normalized = Array.isArray(questions)
//         ? questions.map(q => ({ 
//             question: q.question || q.q || q.userQuestion || q?.questionText || '', 
//             answer: q.answer || q.response || q?.assistantAnswer || '' 
//           }))
//         : [];

//       set({ chats: normalized, isLoading: false, error: null });
//       return { success: true, data: normalized };
//     } catch (err) {
//       console.error('Error fetching chats:', err);
//       set({ chats: [], isLoading: false, error: err.message });
//       return { success: false, message: err.message };
//     }
//   },

//   // Set user info in store
//   setUserInfo: (userInfo) => {
//     set({ userInfo });
//     return { success: true };
//   },

//   // Mark intro as shown
//   setIntroShown: () => {
//     set({ hasShownIntro: true });
//     return { success: true };
//   },

//   // Reset user info (for logout or clear data)
//   clearUserInfo: () => {
//     set({ userInfo: null, hasShownIntro: false });
//     return { success: true };
//   },

//   sendMessage: async (messageData) => {
//     set({ error: null });

//     const { question, context, ragWithContext, userInfo } = messageData;

//     if (!question || question.trim() === '') {
//       const msg = 'No question provided';
//       console.warn(msg);
//       return { success: false, message: msg };
//     }

//     try {
//       const { hasShownIntro, chats } = get();
      
//       console.log('=== SEND MESSAGE START ===');
//       console.log('Question:', question);
//       console.log('hasShownIntro:', hasShownIntro);
//       console.log('userInfo provided:', !!userInfo);

//       // STEP 1: Add user question immediately to show it in UI
//       const userMessage = { question: question.trim(), answer: '' };
//       set(state => ({ 
//         chats: [...state.chats, userMessage], 
//         isLoading: true 
//       }));

//       const res = await fetch(`${API_BASE}/api/astro/ask`, {
//         method: 'POST',
//         credentials: 'include',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           question: question, 
//           context: context || '', 
//           ragWithContext: ragWithContext || true,
//           userInfo: userInfo || null
//         })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         const message = data?.message || data?.error || 'Request failed';
//         // Update the last message with error
//         set(state => ({
//           chats: state.chats.map((chat, index) => 
//             index === state.chats.length - 1 
//               ? { ...chat, answer: `Error: ${message}` }
//               : chat
//           ),
//           isLoading: false,
//           error: message
//         }));
//         return { success: false, message };
//       }

//       const payload = data?.data || data;

//       console.log('=== BACKEND RESPONSE ===');
//       console.log('hasIntro:', payload.hasIntro);
//       console.log('introMessage exists:', !!payload.introMessage);
//       console.log('answer:', payload.answer && payload.remedy);

//       // STEP 2: Process the backend response
//       if (payload.hasIntro && payload.introMessage && !hasShownIntro) {
//         console.log('PROCESSING: First message with intro');
        
//         // For first message with intro, we need to create multiple chat entries
//         set(state => {
//           const chatsWithoutLast = state.chats.slice(0, -1); // Remove the temporary user message
          
//           const newChats = [
//             ...chatsWithoutLast,
//             { question: question, answer: '' }, // User question
//             { question: '', answer: payload.introMessage }, // Intro message
//             { question: '', answer: payload.answer } // AI answer
//           ];
          
//           console.log('Final chats for first message:', newChats);
//           return { 
//             chats: newChats, 
//             isLoading: false,
//             hasShownIntro: true // Mark intro as shown
//           };
//         });
        
//       } else {
//         console.log('PROCESSING: Subsequent message - update last message with answer');
        
//         // For subsequent messages, update the last user message with the answer
//         set(state => ({
//           chats: state.chats.map((chat, index) => 
//             index === state.chats.length - 1 
//               ? { ...chat, answer: payload.answer || payload.introMessage || payload.remedy || 'No response received' }
//               : chat
//           ),
//           isLoading: false
//         }));
//       }

//       return { success: true, data: payload };
//     } catch (err) {
//       console.error('Error sending message:', err);
//       set(state => ({
//         chats: state.chats.map((chat, index) => 
//           index === state.chats.length - 1 
//             ? { ...chat, answer: 'Sorry, I encountered an error. Please try again.' }
//             : chat
//         ),
//         isLoading: false,
//         error: err.message
//       }));
//       return { success: false, message: err.message };
//     }
//   }
// }));

// export default useAIStore;

import { create } from 'zustand';

const API_BASE = 'https://demoastrobackend.onrender.com';

const useAIStore = create((set, get) => ({
  chats: [],
  isLoading: false,
  error: null,
  userInfo: null,
  hasShownIntro: false,

  // Fetch chat history from backend and normalize to { question, answer, remedy }
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

      // normalize different backend shapes
      const questions = data?.data?.questions || data?.questions || data?.data || [];

      const normalized = Array.isArray(questions)
        ? questions.map(q => ({ 
            question: q.question || q.q || q.userQuestion || q?.questionText || '', 
            answer: q.answer || q.response || q?.assistantAnswer || '',
            remedy: q.remedy || '' // Include remedy in normalized data
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

  // Mark intro as shown
  setIntroShown: () => {
    set({ hasShownIntro: true });
    return { success: true };
  },

  // Reset user info (for logout or clear data)
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
      const { hasShownIntro, chats } = get();
      
      console.log('=== SEND MESSAGE START ===');
      console.log('Question:', question);
      console.log('hasShownIntro:', hasShownIntro);
      console.log('userInfo provided:', !!userInfo);

      // STEP 1: Add user question immediately to show it in UI
      const userMessage = { 
        question: question.trim(), 
        answer: '',
        remedy: '' 
      };
      set(state => ({ 
        chats: [...state.chats, userMessage], 
        isLoading: true 
      }));

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
        // Update the last message with error
        set(state => ({
          chats: state.chats.map((chat, index) => 
            index === state.chats.length - 1 
              ? { ...chat, answer: `Error: ${message}`, remedy: '' }
              : chat
          ),
          isLoading: false,
          error: message
        }));
        return { success: false, message };
      }

      const payload = data?.data || data;

      console.log('=== BACKEND RESPONSE ===');
      console.log('hasIntro:', payload.hasIntro);
      console.log('introMessage exists:', !!payload.introMessage);
      console.log('answer:', payload.answer);
      console.log('remedy:', payload.remedy);
      console.log('retrievedSources:', payload.retrievedSources);

      // STEP 2: Process the backend response
      if (payload.hasIntro && payload.introMessage && !hasShownIntro) {
        console.log('PROCESSING: First message with intro');
        
        // For first message with intro, we need to create multiple chat entries
        set(state => {
          const chatsWithoutLast = state.chats.slice(0, -1); // Remove the temporary user message
          
          const newChats = [
            ...chatsWithoutLast,
            { 
              question: question, 
              answer: '', 
              remedy: '' 
            }, // User question
            { 
              question: '', 
              answer: payload.introMessage, 
              remedy: '' 
            }, // Intro message
            { 
              question: '', 
              answer: payload.answer, 
              remedy: payload.remedy || '' 
            } // AI answer with remedy
          ];
          
          console.log('Final chats for first message:', newChats);
          return { 
            chats: newChats, 
            isLoading: false,
            hasShownIntro: true // Mark intro as shown
          };
        });
        
      } else {
        console.log('PROCESSING: Subsequent message - update last message with answer and remedy');
        
        // For subsequent messages, update the last user message with the answer and remedy
        set(state => ({
          chats: state.chats.map((chat, index) => 
            index === state.chats.length - 1 
              ? { 
                  ...chat, 
                  answer: payload.answer || payload.introMessage || 'No response received',
                  remedy: payload.remedy || ''
                }
              : chat
          ),
          isLoading: false
        }));
      }

      return { success: true, data: payload };
    } catch (err) {
      console.error('Error sending message:', err);
      set(state => ({
        chats: state.chats.map((chat, index) => 
          index === state.chats.length - 1 
            ? { 
                ...chat, 
                answer: 'Sorry, I encountered an error. Please try again.',
                remedy: ''
              }
            : chat
        ),
        isLoading: false,
        error: err.message
      }));
      return { success: false, message: err.message };
    }
  }
}));

export default useAIStore;