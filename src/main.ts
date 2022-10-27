import { createApp } from "vue"
import { router } from "@/router"
import { pinia } from "@/store"
import { useREM } from "@/util/flexible"
import { setupLib } from "@/lib"
import { setupTheme } from "@/util/theme"
import App from "./App.vue"

import "@/style/index.scss"
import "virtual:svg-icons-register"

const init = () => {
  // 设置 rem
  useREM()
  // 设置 主题
  setupTheme()
}

init()

createApp(App).use(router).use(pinia).use(setupLib).mount("#app")
