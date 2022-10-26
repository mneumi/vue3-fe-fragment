import type { App } from "vue"
import SVGIcon from "./svg-icon/index.vue"

const setupLib: (app: App) => void = (app: App) => {
  app.component(SVGIcon.name, SVGIcon)
}

export { setupLib }
