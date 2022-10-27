<template>
  <m-popover class="flex items-center" position="left-top">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <img
          class="w-3 h-3 rounded-sm"
          src="https://img0.baidu.com/it/u=2267130927,4233025274&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
        />
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <m-svg-icon
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
        />
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuArr"
        :key="item.id"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class="text-zinc-800 text-sm dark:text-zinc-300">{{
          item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script lang="ts" setup>
const menuArr = [
  {
    id: 0,
    title: "个人资料",
    icon: "profile",
    path: "/profile"
  },
  {
    id: 1,
    title: "升级VIP",
    icon: "vip-profile",
    path: "/member"
  },
  {
    id: 2,
    title: "退出登录",
    icon: "logout",
    path: ""
  }
]
</script>

<style lang="scss" scoped></style>
