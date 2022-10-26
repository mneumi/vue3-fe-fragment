import type { App } from "vue"
import SVGIcon from "./svg-icon/index.vue"
import Popup from "./popup/index.vue"

const setupLib: (app: App) => void = (app: App) => {
  app.component(SVGIcon.name, SVGIcon)
  app.component(Popup.name, Popup)
}

export { setupLib }
