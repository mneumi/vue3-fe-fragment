<template>
  <mobile-navigation v-if="isMobileTerminalByWidth" />
</template>

<script lang="ts" setup>
import { isMobileTerminalByWidth } from "@/util/flexible"
import mobileNavigation from "./mobile/index.vue"
</script>

<style lang="scss" scoped></style>
