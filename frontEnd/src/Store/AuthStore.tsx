import { create } from "zustand";
type UserData = {
  name: string;
  id: string;
  email: string;
  imageUrl: string;
  bio: string;
  createdAt: Date;
};
type AuthStore = {
  userData: null | UserData;
  changeUserData: (data: UserData) => void;
};
const useAuth = create<AuthStore>((set) => ({
  userData: null,
  changeUserData: (data) => set({ userData: data }),
}));
export default useAuth;
