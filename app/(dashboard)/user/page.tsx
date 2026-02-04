"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/stores/useAuth";

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return <p className="text-center mt-20">Redirecting to login...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          Dashboard
        </h1>
      </header>

      {user.role === "superadmin" ? (
        <SuperAdminDashboard user={user} />
      ) : (
        <UserDashboard user={user} />
      )}
    </div>
  );
}

// Superadmin dashboard component
function SuperAdminDashboard({ user }: { user: any }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name} (Superadmin)</h2>
      <p className="mb-6">
        You have full access to manage users, roles, and system settings.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Manage Users" description="Add, edit, or delete users" />
        <Card title="Manage Roles" description="Assign or remove roles" />
        <Card title="System Settings" description="Configure system preferences" />
      </div>
    </div>
  );
}

// Regular user dashboard component
function UserDashboard({ user }: { user: any }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}</h2>
      <p className="mb-6">You can view your tasks and profile information here.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="My Profile" description="Update your personal information" />
        <Card title="My Tasks" description="View and manage your tasks" />
      </div>
    </div>
  );
}

// Reusable card component
function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
    </div>
  );
}
