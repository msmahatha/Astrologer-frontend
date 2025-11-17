import { useEffect } from "react";
import useAuthStore from "../../../stores/useAuthStore";

export default function AuthInitializer({ children }) {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}