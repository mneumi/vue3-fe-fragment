import type { App } from "vue"

const setupLib: (app: App) => void = (app: App) => {
  const modules = import.meta.glob("./*/index.vue", { eager: true })

  for (const fileName in modules) {
    const component = (modules[fileName] as any).default
    app.component(component.name, component)
  }
}

export { setupLib }
