<template>
  <div
    class="w-full items-center bg-white border-b border-b-zinc-200 px-2 py-1 flex"
  >
    <img
      src="https://cn.vitejs.dev/logo.svg"
      class="h-4 cursor-pointer m-2"
      @click="onToHome"
    />
    <header-search class="mr-1" />
    <header-theme class="mr-1" />
    <header-me />
  </div>
</template>

<script lang="ts" setup>
import HeaderSearch from "./header-search/index.vue"
import HeaderTheme from "./header-theme.vue"
import HeaderMe from "./header-me.vue"
import { useRouter } from "vue-router"

const router = useRouter()

const onToHome = () => {
  router.push("/")
}
</script>

<style lang="scss" scoped></style>
