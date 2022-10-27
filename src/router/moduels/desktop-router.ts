import type { RouteRecordRaw } from "vue-router"

const desktopRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("@/view/layout/index.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/view/main/index.vue")
      }
    ]
  }
]

export { desktopRoutes }
