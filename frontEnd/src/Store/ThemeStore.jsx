import { create } from "zustand";
const useThemeStore = create((set, get) => ({
  theme: "light",
  changeTheme: (value) => set({ theme: value }),
}));

export default useThemeStore;
