import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "light" | "dark";
  changeTheme: () => void;
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      changeTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    { name: "theme", partialize: (state) => ({ theme: state.theme }) },
  ),
);

export default useThemeStore;
