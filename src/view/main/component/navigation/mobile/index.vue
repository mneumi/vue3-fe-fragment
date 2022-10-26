<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-[0.25rem] text-xs text-zinc-600 overflow-hidden"
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
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5" @click="onShowPopup" />
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
  <m-popup v-model="isVisiable">
    <ul>
      <li v-for="item in categorys" :key="item.id" class="text-[20px] p-1.5">
        {{ item.name }}
      </li>
    </ul>
  </m-popup>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import { useScroll } from "@vueuse/core"
import type { ICategory } from "@/api/type"
import { transformRemToPx } from "@/util/flexible"

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
    ulTargetScroll.x.value + left - transformRemToPx(0.25)
  }px)`
}

const isVisiable = ref(false)
const onShowPopup = () => {
  isVisiable.value = true
}
</script>

<style lang="scss" scoped></style>
