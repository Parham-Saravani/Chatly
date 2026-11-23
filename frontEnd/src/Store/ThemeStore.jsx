import { create } from "zustand";
import { persist } from "zustand/middleware";
const useThemeStore = create()(
  persist(
    (set) => ({
      theme: "light",
      changeTheme: (value) => set({ theme: value }),
    }),
    { name: "theme", partialize: (state) => ({ theme: state.theme }) },
  ),
);

export default useThemeStore;
