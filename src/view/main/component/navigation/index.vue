<template>
  <mobile-navigation v-if="isMobileTerminalByWidth" :categorys="categorys" />
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { isMobileTerminalByWidth } from "@/util/flexible"
import mobileNavigation from "./mobile/index.vue"
import { getCategory } from "@/api/category"
import type { ICategory } from "@/api/type"

const categorys = ref<ICategory[]>([])

const getCategoryData = async () => {
  const result = await getCategory()
  categorys.value = result.categorys
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
