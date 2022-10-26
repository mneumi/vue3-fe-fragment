import { computed } from "vue"
import { useWindowSize } from "@vueuse/core"
import { DESKTOP_DEVICE_WIDTH } from "@/constant"

const { width: windowWidthSize } = useWindowSize()
const deviceReg = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i

const isMobileTerminalByWidth = computed(() => {
  return windowWidthSize.value < DESKTOP_DEVICE_WIDTH
})

const isMobileTerminalByDevice = deviceReg.test(navigator.userAgent)

export { isMobileTerminalByWidth, isMobileTerminalByDevice }
