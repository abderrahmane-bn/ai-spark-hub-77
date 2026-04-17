import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type UserRole = "student" | "representative" | "admin";
export type RepStatus = "none" | "pending" | "approved" | "rejected";

export interface AppUser {
  id: string;
  email: string;
  fullName: string;
  password: string; // demo only — plaintext in localStorage
  role: UserRole;
  department?: string;
  aiFocus?: string;
  bio?: string;
  repStatus: RepStatus; // none for students/admin, pending/approved/rejected for reps
  enrolledWorkshopIds: string[];
  createdAt: string;
}

const USERS_KEY = "aih_users";
const SESSION_KEY = "aih_session";

// Seeded admin — change here if needed
const SEED_ADMIN: AppUser = {
  id: "admin-seed",
  email: "admin@univ-blida.dz",
  fullName: "AI House Admin",
  password: "admin123",
  role: "admin",
  repStatus: "none",
  enrolledWorkshopIds: [],
  createdAt: new Date().toISOString(),
};

function loadUsers(): AppUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const list: AppUser[] = raw ? JSON.parse(raw) : [];
    if (!list.find((u) => u.email === SEED_ADMIN.email)) {
      list.push(SEED_ADMIN);
      localStorage.setItem(USERS_KEY, JSON.stringify(list));
    }
    return list;
  } catch {
    localStorage.setItem(USERS_KEY, JSON.stringify([SEED_ADMIN]));
    return [SEED_ADMIN];
  }
}

function saveUsers(users: AppUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

interface AuthContextValue {
  user: AppUser | null;
  users: AppUser[];
  login: (email: string, password: string) => { ok: boolean; error?: string };
  signup: (data: {
    fullName: string;
    email: string;
    password: string;
    role: "student" | "representative";
    department?: string;
    aiFocus?: string;
    bio?: string;
  }) => { ok: boolean; error?: string };
  logout: () => void;
  approveRep: (userId: string) => void;
  rejectRep: (userId: string) => void;
  toggleEnrollment: (workshopId: string) => void;
  refresh: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<AppUser[]>(() => loadUsers());
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    const sessionId = localStorage.getItem(SESSION_KEY);
    if (sessionId) {
      const found = users.find((u) => u.id === sessionId);
      if (found) setUser(found);
    }
  }, []);

  const refresh = () => {
    const fresh = loadUsers();
    setUsers(fresh);
    if (user) {
      const u = fresh.find((x) => x.id === user.id);
      if (u) setUser(u);
    }
  };

  const login: AuthContextValue["login"] = (email, password) => {
    const list = loadUsers();
    const found = list.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!found) return { ok: false, error: "No account found with that email." };
    if (found.password !== password) return { ok: false, error: "Incorrect password." };
    localStorage.setItem(SESSION_KEY, found.id);
    setUsers(list);
    setUser(found);
    return { ok: true };
  };

  const signup: AuthContextValue["signup"] = (data) => {
    const list = loadUsers();
    if (list.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { ok: false, error: "An account with that email already exists." };
    }
    const newUser: AppUser = {
      id: `u-${Date.now()}`,
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      // Reps stay as students until approved
      role: "student",
      department: data.department,
      aiFocus: data.aiFocus,
      bio: data.bio,
      repStatus: data.role === "representative" ? "pending" : "none",
      enrolledWorkshopIds: [],
      createdAt: new Date().toISOString(),
    };
    const next = [...list, newUser];
    saveUsers(next);
    localStorage.setItem(SESSION_KEY, newUser.id);
    setUsers(next);
    setUser(newUser);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const approveRep = (userId: string) => {
    const list = loadUsers().map((u) =>
      u.id === userId ? { ...u, role: "representative" as UserRole, repStatus: "approved" as RepStatus } : u,
    );
    saveUsers(list);
    setUsers(list);
    if (user?.id === userId) setUser(list.find((u) => u.id === userId) ?? user);
  };

  const rejectRep = (userId: string) => {
    const list = loadUsers().map((u) =>
      u.id === userId ? { ...u, repStatus: "rejected" as RepStatus } : u,
    );
    saveUsers(list);
    setUsers(list);
    if (user?.id === userId) setUser(list.find((u) => u.id === userId) ?? user);
  };

  const toggleEnrollment = (workshopId: string) => {
    if (!user) return;
    const list = loadUsers().map((u) => {
      if (u.id !== user.id) return u;
      const has = u.enrolledWorkshopIds.includes(workshopId);
      return {
        ...u,
        enrolledWorkshopIds: has
          ? u.enrolledWorkshopIds.filter((id) => id !== workshopId)
          : [...u.enrolledWorkshopIds, workshopId],
      };
    });
    saveUsers(list);
    setUsers(list);
    setUser(list.find((u) => u.id === user.id) ?? user);
  };

  return (
    <AuthContext.Provider
      value={{ user, users, login, signup, logout, approveRep, rejectRep, toggleEnrollment, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
