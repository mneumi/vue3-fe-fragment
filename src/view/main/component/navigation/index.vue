<template>
  <mobile-navigation v-if="isMobileTerminalByWidth" :categorys="categorys" />
</template>

<script lang="ts" setup>
import type { ICategory } from "@/api/type"

import { ref } from "vue"
import { isMobileTerminalByWidth } from "@/util/flexible"
import { getCategory } from "@/api/category"
import { ALL_CATEGORY_ITEM } from "@/constant"

import mobileNavigation from "./mobile/index.vue"

const categorys = ref<ICategory[]>([])

const getCategoryData = async () => {
  const result = await getCategory()
  categorys.value = result.categorys
  categorys.value.unshift(ALL_CATEGORY_ITEM)
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
