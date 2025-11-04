import { create } from 'zustand'

interface UserState {
  token: string
  setToken: (token: string) => void
  clearToken: () => void
}

const useUser = create<UserState>((set) => ({
  token: '',
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: '' }),
}))

export default useUser
