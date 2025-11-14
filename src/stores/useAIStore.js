// import { create } from "zustand";
// import axios from "axios";

// const useAIStore = create((set) => ({
//   chats: [],
//   chatsLoading: false,
//   error: null,

//   fetchChats: async () => {
//     set({ chatsLoading: true, error: null });

//     try {
//       const res = await axios.get("https://demoastrobackend.onrender.com/api/astro/history", {
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         set({ chats: res.data.data.questions, chatsLoading: false });
//         console.log(res.data.data.questions);
//       } else {
//         set({
//           chats: [],
//           chatsLoading: false,
//           error: res.data.message || "Failed to fetch chat history",
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching chats:", err);
//       set({
//         chats: [],
//         chatsLoading: false,
//         error:
//           err.response?.data?.message ||
//           err.message ||
//           "An unexpected error occurred while fetching chats.",
//       });
//     }
//   },

//   sendMessage : async(data) => {
//     try {
//         const res = await axios.post("https://demoastrobackend.onrender.com/api/astro/ask",data,{
//             withCredentials:true,
//         });
//         if(res.data.success){
//             set((state) => ({
//                 chats: [...state.chats, res.data.data],
//             }));
//             console.log(res.data.data);
//         }
//         else{
//             return { success: false, message: res.data.message || "Failed to send message" };
//         }

//     } catch (error) {
//         console.error("Error sending message:", error);
//         return { 
//             success: false, 
//             message: error.response?.data?.message || error.message || "An unexpected error occurred while sending the message." 
//         };
//     }
//   }
// }));

// export default useAIStore;




import { create } from 'zustand';

const API_BASE = 'https://demoastrobackend.onrender.com'; // Change to your backend URL

const useAIStore = create((set, get) => ({
  chats: [],
  isLoading: false,
  error: null,

  // Fetch chat history from backend and normalize to { question, answer }
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
        ? questions.map(q => ({ question: q.question || q.q || q.userQuestion || q?.questionText || '', answer: q.answer || q.response || q?.assistantAnswer || '' }))
        : [];

      set({ chats: normalized, isLoading: false, error: null });
      return { success: true, data: normalized };
    } catch (err) {
      console.error('Error fetching chats:', err);
      set({ chats: [], isLoading: false, error: err.message });
      return { success: false, message: err.message };
    }
  },

  // sendMessage accepts either (questionString, contextString) or a single object { question, context }
  sendMessage: async (question, context) => {
    set({ error: null });

    // normalize args
    let bodyQuestion = '';
    let bodyContext = '';

    if (typeof question === 'string') {
      bodyQuestion = question;
      bodyContext = typeof context === 'string' ? context : '';
    } else if (typeof question === 'object' && question !== null) {
      bodyQuestion = question.question || question.q || '';
      bodyContext = question.context || '';
    }

    if (!bodyQuestion) {
      const msg = 'No question provided';
      console.warn(msg);
      return { success: false, message: msg };
    }

    try {
      // Optimistically add user message
      set(state => ({ chats: [...state.chats, { question: bodyQuestion, answer: '' }], isLoading: true }));

      const res = await fetch(`${API_BASE}/api/astro/ask`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: bodyQuestion, context: bodyContext, ragWithContext: true })
      });

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message || data?.error || 'Request failed';
        // replace last optimistic message with an error assistant response
        set(state => ({
          chats: [...state.chats.slice(0, -1), { question: bodyQuestion, answer: '' }, { question: '', answer: `Error: ${message}` }],
          isLoading: false,
          error: message
        }));
        return { success: false, message };
      }

      const payload = data?.data || data;

      // build assistant answer text from available fields
      const assistantAnswer = (payload?.answer || payload?.response || payload?.assistantAnswer || '')
        || (payload?.message || '')
        || '';

      // const finalAnswer = `${assistantAnswer}\n\nRemedy: ${payload?.remedy || ''}`;
 const finalAnswer = `${assistantAnswer}`;
      // replace last optimistic user message by keeping it and appending assistant answer
      set(state => ({ chats: [...state.chats.slice(0, -1), { question: bodyQuestion, answer: finalAnswer }], isLoading: false }));

      return { success: true, data: payload };
    } catch (err) {
      console.error('Error sending message:', err);
      set(state => ({
        chats: [...state.chats.slice(0, -1), { question: bodyQuestion, answer: 'Sorry, I encountered an error. Please try again.' }],
        isLoading: false,
        error: err.message
      }));
      return { success: false, message: err.message };
    }
  }
}));

export default useAIStore;