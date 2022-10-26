import { computed } from "vue"
import { useWindowSize } from "@vueuse/core"
import { DESKTOP_DEVICE_WIDTH } from "@/constant"

const { width: windowWidthSize } = useWindowSize()
const deviceReg = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i
const MAX_FONT_SIZE = 40

const isMobileTerminalByWidth = computed(() => {
  return windowWidthSize.value < DESKTOP_DEVICE_WIDTH
})

const isMobileTerminalByDevice = deviceReg.test(navigator.userAgent)

const useREM = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const htmlElement = document.querySelector("html")!

    let fontSzie = window.innerWidth / 10
    fontSzie = fontSzie > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSzie

    htmlElement.style.fontSize = fontSzie + "px"
  })
}

export { isMobileTerminalByWidth, isMobileTerminalByDevice, useREM }
