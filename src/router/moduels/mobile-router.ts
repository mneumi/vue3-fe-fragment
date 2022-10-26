import type { RouteRecordRaw } from "vue-router"

const mobileRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/view/main/index.vue")
  }
]

export { mobileRoutes }
