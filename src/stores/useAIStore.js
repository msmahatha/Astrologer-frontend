// // import { create } from 'zustand';

// // const API_BASE = 'http://localhost:5000';

// // const useAIStore = create((set, get) => ({
// //   chats: [],
// //   isLoading: false,
// //   error: null,
// //   userInfo: null,
// //   hasShownIntro: false,

// //   // Fetch chat history from backend and normalize to { question, answer }
// //   fetchChats: async () => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const res = await fetch(`${API_BASE}/api/astro/history`, {
// //         method: 'GET',
// //         credentials: 'include',
// //         headers: { 'Content-Type': 'application/json' }
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         const message = data?.message || data?.error || 'Failed to fetch chat history';
// //         set({ chats: [], isLoading: false, error: message });
// //         return { success: false, message };
// //       }

// //       // normalize different backend shapes
// //       const questions = data?.data?.questions || data?.questions || data?.data || [];

// //       const normalized = Array.isArray(questions)
// //         ? questions.map(q => ({ 
// //             question: q.question || q.q || q.userQuestion || q?.questionText || '', 
// //             answer: q.answer || q.response || q?.assistantAnswer || '' 
// //           }))
// //         : [];

// //       set({ chats: normalized, isLoading: false, error: null });
// //       return { success: true, data: normalized };
// //     } catch (err) {
// //       console.error('Error fetching chats:', err);
// //       set({ chats: [], isLoading: false, error: err.message });
// //       return { success: false, message: err.message };
// //     }
// //   },

// //   // Set user info in store
// //   setUserInfo: (userInfo) => {
// //     set({ userInfo });
// //     return { success: true };
// //   },

// //   // Mark intro as shown
// //   setIntroShown: () => {
// //     set({ hasShownIntro: true });
// //     return { success: true };
// //   },

// //   // Reset user info (for logout or clear data)
// //   clearUserInfo: () => {
// //     set({ userInfo: null, hasShownIntro: false });
// //     return { success: true };
// //   },

// //   sendMessage: async (messageData) => {
// //     set({ error: null });

// //     const { question, context, ragWithContext, userInfo } = messageData;

// //     if (!question || question.trim() === '') {
// //       const msg = 'No question provided';
// //       console.warn(msg);
// //       return { success: false, message: msg };
// //     }

// //     try {
// //       const { hasShownIntro, chats } = get();
      
// //       console.log('=== SEND MESSAGE START ===');
// //       console.log('Question:', question);
// //       console.log('hasShownIntro:', hasShownIntro);
// //       console.log('userInfo provided:', !!userInfo);

// //       // STEP 1: Add user question immediately to show it in UI
// //       const userMessage = { question: question.trim(), answer: '' };
// //       set(state => ({ 
// //         chats: [...state.chats, userMessage], 
// //         isLoading: true 
// //       }));

// //       const res = await fetch(`${API_BASE}/api/astro/ask`, {
// //         method: 'POST',
// //         credentials: 'include',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ 
// //           question: question, 
// //           context: context || '', 
// //           ragWithContext: ragWithContext || true,
// //           userInfo: userInfo || null
// //         })
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         const message = data?.message || data?.error || 'Request failed';
// //         // Update the last message with error
// //         set(state => ({
// //           chats: state.chats.map((chat, index) => 
// //             index === state.chats.length - 1 
// //               ? { ...chat, answer: `Error: ${message}` }
// //               : chat
// //           ),
// //           isLoading: false,
// //           error: message
// //         }));
// //         return { success: false, message };
// //       }

// //       const payload = data?.data || data;

// //       console.log('=== BACKEND RESPONSE ===');
// //       console.log('hasIntro:', payload.hasIntro);
// //       console.log('introMessage exists:', !!payload.introMessage);
// //       console.log('answer:', payload.answer && payload.remedy);

// //       // STEP 2: Process the backend response
// //       if (payload.hasIntro && payload.introMessage && !hasShownIntro) {
// //         console.log('PROCESSING: First message with intro');
        
// //         // For first message with intro, we need to create multiple chat entries
// //         set(state => {
// //           const chatsWithoutLast = state.chats.slice(0, -1); // Remove the temporary user message
          
// //           const newChats = [
// //             ...chatsWithoutLast,
// //             { question: question, answer: '' }, // User question
// //             { question: '', answer: payload.introMessage }, // Intro message
// //             { question: '', answer: payload.answer } // AI answer
// //           ];
          
// //           console.log('Final chats for first message:', newChats);
// //           return { 
// //             chats: newChats, 
// //             isLoading: false,
// //             hasShownIntro: true // Mark intro as shown
// //           };
// //         });
        
// //       } else {
// //         console.log('PROCESSING: Subsequent message - update last message with answer');
        
// //         // For subsequent messages, update the last user message with the answer
// //         set(state => ({
// //           chats: state.chats.map((chat, index) => 
// //             index === state.chats.length - 1 
// //               ? { ...chat, answer: payload.answer || payload.introMessage || payload.remedy || 'No response received' }
// //               : chat
// //           ),
// //           isLoading: false
// //         }));
// //       }

// //       return { success: true, data: payload };
// //     } catch (err) {
// //       console.error('Error sending message:', err);
// //       set(state => ({
// //         chats: state.chats.map((chat, index) => 
// //           index === state.chats.length - 1 
// //             ? { ...chat, answer: 'Sorry, I encountered an error. Please try again.' }
// //             : chat
// //         ),
// //         isLoading: false,
// //         error: err.message
// //       }));
// //       return { success: false, message: err.message };
// //     }
// //   }
// // }));

// // export default useAIStore;

// import { create } from 'zustand';

// const API_BASE = 'http://localhost:5000';

// const useAIStore = create((set, get) => ({
//   chats: [],
//   isLoading: false,
//   error: null,
//   userInfo: null,
//   hasShownIntro: false,

//   // Fetch chat history from backend and normalize to { question, answer, remedy }
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
//             answer: q.answer || q.response || q?.assistantAnswer || '',
//             remedy: q.remedy || '' // Include remedy in normalized data
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
//       const userMessage = { 
//         question: question.trim(), 
//         answer: '',
//         remedy: '' 
//       };
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
//               ? { ...chat, answer: `Error: ${message}`, remedy: '' }
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
//       console.log('answer:', payload.answer);
//       console.log('remedy:', payload.remedy);
//       console.log('retrievedSources:', payload.retrievedSources);

//       // STEP 2: Process the backend response
//       if (payload.hasIntro && payload.introMessage && !hasShownIntro) {
//         console.log('PROCESSING: First message with intro');
        
//         // For first message with intro, we need to create multiple chat entries
//         set(state => {
//           const chatsWithoutLast = state.chats.slice(0, -1); // Remove the temporary user message
          
//           const newChats = [
//             ...chatsWithoutLast,
//             { 
//               question: question, 
//               answer: '', 
//               remedy: '' 
//             }, // User question
//             { 
//               question: '', 
//               answer: payload.introMessage, 
//               remedy: '' 
//             }, // Intro message
//             { 
//               question: '', 
//               answer: payload.answer, 
//               remedy: payload.remedy || '' 
//             } // AI answer with remedy
//           ];
          
//           console.log('Final chats for first message:', newChats);
//           return { 
//             chats: newChats, 
//             isLoading: false,
//             hasShownIntro: true // Mark intro as shown
//           };
//         });
        
//       } else {
//         console.log('PROCESSING: Subsequent message - update last message with answer and remedy');
        
//         // For subsequent messages, update the last user message with the answer and remedy
//         set(state => ({
//           chats: state.chats.map((chat, index) => 
//             index === state.chats.length - 1 
//               ? { 
//                   ...chat, 
//                   answer: payload.answer || payload.introMessage || 'No response received',
//                   remedy: payload.remedy || ''
//                 }
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
//             ? { 
//                 ...chat, 
//                 answer: 'Sorry, I encountered an error. Please try again.',
//                 remedy: ''
//               }
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

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

const useAIStore = create((set, get) => ({
  chats: [],
  isLoading: false,
  error: null,
  userInfo: null,
  hasShownIntro: false,
  // UI panels state: dynamic panels the UI can render (e.g. remedy panel)
  uiPanels: {
    remedy: false,
    intro: false
  },
  // Panel payloads for dynamic rendering
  panelData: {},

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

  // Show a dynamic UI panel (name) with optional payload
  showPanel: (name, data = {}) => {
    set(state => ({
      uiPanels: { ...state.uiPanels, [name]: true },
      panelData: { ...state.panelData, [name]: data }
    }));
    return { success: true };
  },

  // Hide a dynamic UI panel
  hidePanel: (name) => {
    set(state => ({
      uiPanels: { ...state.uiPanels, [name]: false },
      panelData: { ...state.panelData, [name]: null }
    }));
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

    const { question, context, ragWithContext, userInfo, user_name } = messageData;

    if (!question || question.trim() === '') {
      const msg = 'No question provided';
      console.warn(msg);
      return { success: false, message: msg };
    }

    try {
      const { hasShownIntro } = get();
      
      console.log('=== SEND MESSAGE START ===');
      console.log('Question:', question);
      console.log('User Name:', user_name);
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

      // First 2-second delay - show typing after user question
      await new Promise(resolve => setTimeout(resolve, 2000));

      const res = await fetch(`${API_BASE}/api/astro/ask`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: question, 
          context: context || '', 
          ragWithContext: ragWithContext || true,
          userInfo: userInfo || null,
          user_name: user_name || null
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
        
        // Show intro message after first delay
        set(state => {
          const newChats = [
            ...state.chats,
            { 
              question: '', 
              answer: payload.introMessage, 
              remedy: '' 
            } // Intro message
          ];
          
          console.log('Showing intro message after first delay');
          return { 
            chats: newChats, 
            isLoading: true // Keep loading for second typing delay
          };
        });

        // Second 2-second delay before showing AI answer
        setTimeout(() => {
          console.log('Adding AI answer after second 2-second delay');
          set(state => {
            const newChats = [
              ...state.chats,
              { 
                question: '', 
                answer: payload.answer, 
                remedy: payload.remedy || '' 
              } // AI answer with remedy
            ];
            
            // Also show remedy panel if backend included remedy
            const showRemedy = payload.hasRemedy && payload.remedy;
            return { 
              chats: newChats, 
              isLoading: false,
              hasShownIntro: true, // Mark intro as shown
              uiPanels: showRemedy ? { ...state.uiPanels, remedy: true } : state.uiPanels,
              panelData: showRemedy ? { ...state.panelData, remedy: { question: question, remedy: payload.remedy } } : state.panelData
            };
          });
        }, 2000);
        
      } else {
        console.log('PROCESSING: Subsequent message - update last message with answer');
        console.log('Has remedy in response:', payload.hasRemedy);
        
        // For subsequent messages, just show answer after the initial delay
        // Only include remedy if backend indicated it should be shown
        set(state => {
          const hasRem = payload.hasRemedy && payload.remedy;
          return ({
            chats: state.chats.map((chat, index) => 
              index === state.chats.length - 1 
                ? { 
                    ...chat, 
                    answer: payload.answer || payload.introMessage,
                    remedy: hasRem ? payload.remedy : ''
                  }
                : chat
            ),
            isLoading: false,
            uiPanels: hasRem ? { ...state.uiPanels, remedy: true } : state.uiPanels,
            panelData: hasRem ? { ...state.panelData, remedy: { question: question, remedy: payload.remedy } } : state.panelData
          });
        });
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