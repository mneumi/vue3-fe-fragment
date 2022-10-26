<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="modelValue"
        @click="emits('update:modelValue', false)"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
      ></div>
    </transition>
    <transition name="popup">
      <div
        v-if="modelValue"
        v-bind="$attrs"
        class="w-screen bg-white z-50 fixed bottom-0 max-h-[70vh] overflow-scroll"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { watch } from "vue"
import { useScrollLock } from "@vueuse/core"

const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits(["update:modelValue"])
const isLocked = useScrollLock(document.body)
watch(
  () => props.modelValue,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "m-popup"
})
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-levae-to {
  opacity: 0;
}

.popup-enter-active {
  transition: all 0.3s;
}

.popup-enter-from,
.popup-levae-to {
  transform: translateY(100%);
}
</style>
