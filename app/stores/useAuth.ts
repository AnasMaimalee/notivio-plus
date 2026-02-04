// stores/useAuth.ts
import { create } from "zustand";
import api from "../utils/api";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Theme {
  primary: string;
  secondary: string;
}

export interface Menu {
  label: string;
  icon?: string;
  route: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  menus: Menu[];
  theme: Theme;
  permissions: string[];
  loading: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  restore: () => void;
  updateUser: (user: User) => void;
  setAuth: (user: User, token: string) => void; // for register or manual set
  isAuthenticated: () => boolean;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  menus: [],
  theme: { primary: "#10b981", secondary: "#6ee7b7" },
  permissions: [],
  loading: true,

  login: async (email: string, password: string) => {
    set({ loading: true });
    try {
      const res = await api.post("/auth/login", { email, password });
      const { user, token, menus, theme, permissions } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("menus", JSON.stringify(menus));
      localStorage.setItem("theme", JSON.stringify(theme));
      localStorage.setItem("permissions", JSON.stringify(permissions));

      set({ user, token, menus, theme, permissions, loading: false });
    } catch (err: any) {
      set({ loading: false });
      throw new Error(err.response?.data?.message || "Login failed");
    }
  },

  logout: () => {
    localStorage.clear();
    set({
      user: null,
      token: null,
      menus: [],
      theme: { primary: "#10b981", secondary: "#6ee7b7" },
      permissions: [],
      loading: false,
    });
  },

  restore: () => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const menus = localStorage.getItem("menus");
    const theme = localStorage.getItem("theme");
    const permissions = localStorage.getItem("permissions");

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
        menus: menus ? JSON.parse(menus) : [],
        theme: theme ? JSON.parse(theme) : { primary: "#10b981", secondary: "#6ee7b7" },
        permissions: permissions ? JSON.parse(permissions) : [],
        loading: false,
      });
    } else {
      set({ loading: false });
    }
  },

  updateUser: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  setAuth: (user: User, token: string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },

  isAuthenticated: () => !!get().user && !!get().token,
}));
