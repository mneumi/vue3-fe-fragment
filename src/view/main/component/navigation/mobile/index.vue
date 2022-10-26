<template>
  <div>我是移动端 navigation</div>
</template>

<script lang="ts" setup>
import { getCategory } from "@/api/category"

const getCategoryData = async () => {
  const result = await getCategory()
  console.log(result)
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
