"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../stores/useAuth";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user, restore, loading } = useAuth();
  const router = useRouter();
  const [restored, setRestored] = useState(false); // track if restore() finished

  // Restore user from localStorage on mount
  useEffect(() => {
    restore();
    setRestored(true); // mark restore as done
  }, [restore]);

  // Redirect if not logged in
  useEffect(() => {
    if (restored && !loading && !user) {
      router.replace("/login");
    }
  }, [restored, loading, user, router]);

  // Show loading until restore is complete
  if (loading || !restored || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
