<template>
  <m-popover position="left-top">
    <template #reference>
      <m-svg-icon
        name="theme-light"
        class="w-4 h-4 p-1 cursor-pointer duration-200 rounded-sm outline-hone hover:bg-zinc-200/60"
        fillClass="fill-zinc-900"
      />
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in themeArr"
        :key="item.id"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        />
        <span class="text-zinc-900 text-sm">{{ item.name }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script lang="ts" setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constant"

const themeArr = [
  {
    id: "0",
    type: THEME_LIGHT,
    icon: "theme-light",
    name: "极简白"
  },
  {
    id: "0",
    type: THEME_DARK,
    icon: "theme-dark",
    name: "极夜黑"
  },
  {
    id: "0",
    type: THEME_SYSTEM,
    icon: "theme-system",
    name: "跟随系统"
  }
]
</script>

<style lang="scss" scoped></style>
