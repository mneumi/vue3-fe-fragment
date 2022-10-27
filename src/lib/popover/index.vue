<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseleave">
    <div ref="referenceTarget">
      <slot name="reference" />
    </div>
    <transition name="slide">
      <div
        ref="contentTarget"
        v-if="isVisible"
        class="absolute p-1 z-20 bg-white border rounded-md"
        :style="contentStyle"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { clear } from "console"
import { ref, watch, nextTick } from "vue"

const props = defineProps<{
  position: "left-top" | "left-down" | "right-top" | "right-down"
}>()

const isVisible = ref<boolean>(false)
const referenceTarget = ref<HTMLElement | null | undefined>()
const contentTarget = ref<HTMLElement | null | undefined>()
let timer: any

const onMouseEnter = () => {
  isVisible.value = true
  if (timer) {
    clearTimeout(timer)
  }
}

const onMouseleave = () => {
  timer = setTimeout(() => {
    isVisible.value = false
  }, 100)
}

const useElementSize = (target: HTMLElement | null | undefined) => {
  if (target) {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    }
  }
}

const contentStyle = ref({
  top: "0px",
  left: "0px"
})

watch(isVisible, (newVal) => {
  if (newVal) {
    nextTick(() => {
      switch (props.position) {
        case "left-top":
          contentStyle.value.top = "0px"
          contentStyle.value.left =
            -useElementSize(contentTarget.value)!.width + "px"
          break
        case "left-down":
          contentStyle.value.top =
            useElementSize(referenceTarget.value)!.height + "px"
          contentStyle.value.left =
            -useElementSize(contentTarget.value)!.width + "px"
          break
        case "right-top":
          contentStyle.value.top = "0px"
          contentStyle.value.left =
            useElementSize(referenceTarget.value)!.width + "px"
          break
        case "right-down":
          contentStyle.value.top =
            useElementSize(referenceTarget.value)!.height + "px"
          contentStyle.value.left =
            useElementSize(referenceTarget.value)!.width + "px"
          break
      }
    })
  }
})
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "m-popover"
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
