<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 dark:text-zinc-200 font-bold mb-2 px-1">
      所有分类
    </h2>
    <ul class="overflow-y-scroll">
      <li
        v-for="(item, index) in categorys"
        :key="item.id"
        class="text-lg text-zinc-900 px-1 py-1.5 duration-100 dark:text-zinc-300 active:bg-zinc-100 dark:active:bg-zinc-900"
        @click="emit('item-click', index)"
        :class="{
          'text-slate-100': index === highlightIndex,
          'bg-slate-700': index === highlightIndex,
          'm-1': index === highlightIndex
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ICategory } from "@/api/type"

defineProps<{
  categorys: ICategory[]
  highlightIndex?: number
}>()

const emit = defineEmits<{
  (e: "item-click", index: number): void
}>()
</script>

<style lang="scss" scoped></style>
