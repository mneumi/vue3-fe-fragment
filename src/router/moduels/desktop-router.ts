import type { RouteRecordRaw } from "vue-router"

const desktopRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("@/view/layout/index.vue"),
    children: []
  }
]

export { desktopRoutes }
