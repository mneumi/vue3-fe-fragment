import { createRouter, createWebHistory } from "vue-router"
import { isMobileTerminalByWidth } from "@/util/flexible"
import { mobileRoutes } from "./moduels/mobile-router"
import { desktopRoutes } from "./moduels/desktop-router"

const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminalByWidth.value ? mobileRoutes : desktopRoutes
})

export { router }
