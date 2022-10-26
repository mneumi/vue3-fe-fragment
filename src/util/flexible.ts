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
    const htmlElement = document.documentElement

    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize

    htmlElement.style.fontSize = fontSize + "px"
  })
}

const transformRemToPx = (remValue: number) => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize

  return fontSize * remValue
}

export {
  isMobileTerminalByWidth,
  isMobileTerminalByDevice,
  useREM,
  transformRemToPx
}
