<template>
  <button
    @click.stop="onBtnClick"
    class="text-sm text-center rounded duration-500 flex justify-center items-center"
    :class="[
      ButtonType[type],
      ButtonSizeGroup[size].button,
      {
        'active:scale-105': isActiveAnimate
      }
    ]"
  >
    <m-svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    />
    <m-svg-icon
      v-if="icon"
      class="m-auto"
      :name="icon"
      :class="ButtonSizeGroup[size].icon"
      :color="iconColor"
      :fillColor="iconClass"
    />
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
import {
  ButtonSizeGroup,
  ButtonType,
  ButtonTypeEnum,
  ButtonSizeEnum
} from "./types"

const props = withDefaults(
  defineProps<{
    icon?: string
    iconColor?: string
    iconClass?: string
    type?: ButtonTypeEnum
    size?: ButtonSizeEnum
    isActiveAnimate?: boolean
    loading?: boolean
  }>(),
  {
    type: "main",
    size: "default",
    isActiveAnimate: true,
    loading: false
  }
)

const emit = defineEmits<{
  (e: "click"): void
}>()

const onBtnClick = () => {
  if (props.loading) return

  emit("click")
}
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "m-button"
})
</script>

<style lang="scss" scoped></style>
