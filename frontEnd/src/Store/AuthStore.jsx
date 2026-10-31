import { create } from "zustand";
const useAuth = create((set) => ({
  userData: null,
  changeUserData: (data) => set({ userData: data }),
}));
export default useAuth;
