import { defineStore } from "pinia"
import { changeTheme } from "@/util/theme"

interface IState {
  theme: "light" | "dark" | "system"
}

const useThemeStore = defineStore("theme", {
  state: (): IState => {
    return {
      theme: "light"
    }
  },
  getters: {},
  actions: {
    changeTheme(newTheme: "light" | "dark" | "system") {
      this.theme = newTheme
      changeTheme(newTheme)
    }
  },
  persist: true
})

export { useThemeStore }
