import { createApp } from "vue"
import { router } from "@/router"
import { useREM } from "@/util/flexible"
import { setupLib } from "@/lib"
import App from "./App.vue"

import "@/style/index.scss"
import "virtual:svg-icons-register"

useREM()

createApp(App).use(router).use(setupLib).mount("#app")
