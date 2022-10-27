<template>
  <div class="h-screen">
    <header-vue class="h-header" />
    <main-vue class="h-main" />
    <floating class="fixed bottom-10 right-2" />
  </div>
</template>

<script lang="ts" setup>
import HeaderVue from "./component/header/index.vue"
import MainVue from "./component/main.vue"
import Floating from "./component/floating.vue"
</script>

<style lang="scss" scoped></style>
