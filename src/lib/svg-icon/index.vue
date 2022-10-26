<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolID" :class="fillClass" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps<{
  name: string
  color?: string
  fillClass?: string
}>()

const symbolID = computed(() => `#icon-${props.name}`)
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "m-svg-icon"
})
</script>

<style lang="scss" scoped></style>
