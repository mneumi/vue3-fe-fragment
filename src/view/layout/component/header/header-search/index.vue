<template>
  <div class="w-full">
    <m-search v-model="searchValue">
      <template #dropdown>
        <div>Hello World</div>
      </template>
    </m-search>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const searchValue = ref("")
</script>

<style lang="scss" scoped></style>
