<template>
  <m-popover position="left-top">
    <template #reference>
      <m-svg-icon
        :name="svgIconName"
        class="w-4 h-4 p-1 cursor-pointer duration-200 rounded-sm outline-hone hover:bg-zinc-200/60 dark:hover:bg-zinc-900"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      />
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in themeArr"
        :key="item.id"
        @click="onThemeClick(item.type)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.name
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constant"
import { useThemeStore } from "@/store/theme"

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

const themeStore = useThemeStore()

const onThemeClick = (theme: string) => {
  if (theme === THEME_DARK) {
    themeStore.changeTheme("dark")
  } else if (theme === THEME_LIGHT) {
    themeStore.changeTheme("light")
  } else {
    themeStore.changeTheme("system")
  }
}

const svgIconName = computed(() => {
  return `theme-${themeStore.theme}`
})
</script>

<style lang="scss" scoped></style>
