import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string
  profile: string
  isAuth: boolean
}

type Actions = {
  setToken: (token: string) => void
  setProfile: (profile: string) => void
  setLogout: () => void
}

export const useAuthstore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: "",
      isAuth: false,
      setToken: (token: string) => set((state) => ({
        token,
        isAuth: true
      })),
      setProfile: (profile: string) => set((state) => ({
        profile
      })),
      setLogout: () => set((state) => ({
        token: "",
        isAuth: false,
        profile: ""
      }))
    }), {name: 'auth'}
  )
)