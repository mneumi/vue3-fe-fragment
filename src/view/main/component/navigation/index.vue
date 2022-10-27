<template>
  <mobile-navigation v-if="isMobileTerminalByWidth" />
  <desktop-navigation v-else />
</template>

<script lang="ts" setup>
import { isMobileTerminalByWidth } from "@/util/flexible"
import { useCategoryStore } from "@/store/category"
import MobileNavigation from "./mobile/index.vue"
import DesktopNavigation from "./desktop/index.vue"

const categorysStore = useCategoryStore()
categorysStore.getCategorys()
</script>

<style lang="scss" scoped></style>
