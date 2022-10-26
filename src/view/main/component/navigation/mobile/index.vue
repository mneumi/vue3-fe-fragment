<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-[10px] text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <li
        ref="sliderTaget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5" />
      </li>
      <li
        v-for="(item, index) in categorys"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        ref="liTargets"
        @click="handleCategoryClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue"
import { useScroll } from "@vueuse/core"
import type { ICategory } from "@/api/type"

defineProps<{
  categorys: ICategory[]
}>()

const currentCategoryIndex = ref(0)

const liTargets = ref([])
const ulTarget = ref()
const ulTargetScroll = useScroll(ulTarget)

const sliderStyle = ref({
  transform: "translateX(0px)",
  width: `0px`
})

watch(
  liTargets,
  (newValue) => {
    if (newValue.length > 0) {
      const width = (newValue[0] as HTMLElement).clientWidth
      sliderStyle.value.width = `${width}px`
    }
  },
  {
    immediate: true,
    deep: true
  }
)

const handleCategoryClick = (index: number) => {
  currentCategoryIndex.value = index
  const { left, width } = (
    liTargets.value[index] as HTMLElement
  ).getBoundingClientRect()

  sliderStyle.value.width = `${width}px`
  sliderStyle.value.transform = `translateX(${
    ulTargetScroll.x.value + left - 10
  }px)`
}
</script>

<style lang="scss" scoped></style>
