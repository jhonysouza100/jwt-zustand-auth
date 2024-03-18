import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string
  profile: string
}

type Actions = {
  setToken: (token: string) => void
  setProfile: (profile: string) => void
}

export const useAuthstore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: "",
      setToken: (token: string) => set((state) => ({
        token
      })),
      setProfile: (profile: string) => set((state) => ({
        profile
      }))
    }), {name: 'auth'}
  )
)