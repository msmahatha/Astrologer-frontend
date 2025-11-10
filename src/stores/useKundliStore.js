import { create } from "zustand";
import axios from "axios";

// Base URL for backend requests. In development we'll prefer a relative path so Vite proxy (vite.config.js)
// can forward /api requests to the real backend and avoid CORS. For production, set VITE_API_BASE_URL.
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // example: "https://demoastrobackend.onrender.com"

const useKundliStore = create((set) => ({
  kundli: null,
  loading: false,

  generateKundli: async (data) => {
    set({ loading: true });

    try {
      // Log payload for easier debugging
      console.log("generateKundli - sending payload:", data);

      // Use relative /api path when API_BASE is empty so dev proxy works
      const url = `${API_BASE}/api/kundli/generate`;

      const res = await axios.post(url, data, { withCredentials: true });

      if (res.data.success) {
        set({ kundli: res.data.data, loading: false });
        console.log(res.data.data);
      } else {
        set({ kundli: null, loading: false });
        return { success: false, message: res.data.message || "Failed to generate kundli" };
      }
    } catch (error) {
      set({ kundli: null, loading: false });
      // More explicit logging to capture server response body and status
      console.error("Error generating kundli:", error?.toJSON ? error.toJSON() : error);
      if (error.response) {
        console.error("Backend response data:", error.response.data);
        console.error("Backend status:", error.response.status);
      }

      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred while generating kundli.",
      };
    }
  },
}));

export default useKundliStore;