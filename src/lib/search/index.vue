<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
    ref="containerTarget"
  >
    <div>
      <m-svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="search"
        color="#707070"
      />
      <input
        type="text"
        placeholder="搜索"
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 focus:border-red-300 text-sm duration-500 group-hover:bg-white group-hover:border-zinc-200"
        v-model="searchValue"
        @keyup.enter="onSearchHandler"
        @focus="onFocusHandler"
      />
      <m-svg-icon
        v-show="searchValue"
        name="input-delete"
        class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
        @click="onClearClick"
      />
      <div
        class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <m-button
        class="opacity-0 absolute translate-y-[-50%] top-[50%] right-1 rounded-full group-hover:opacity-100"
        icon="search"
        iconColor="#fff"
        size="icon-default"
        @click="onSearchHandler"
      />
    </div>
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-2xl"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import { onClickOutside } from "@vueuse/core"

const props = defineProps<{
  modelValue: string
}>()

const searchValue = ref<string>(props.modelValue ?? "")

watch(searchValue, (newValue) => {
  emit("update:modelValue", newValue)
  emit("input", newValue)
})

const emit = defineEmits([
  "update:modelValue",
  "search",
  "clear",
  "input",
  "focus",
  "blur"
])

const onClearClick = () => {
  searchValue.value = ""
  emit("clear")
}

const onSearchHandler = () => {
  emit("search", searchValue.value)
  console.log(searchValue.value)
}

const isFocus = ref<boolean>(false)
const containerTarget = ref()

const onFocusHandler = () => {
  isFocus.value = true
  emit("focus")
}

onClickOutside(containerTarget, () => {
  isFocus.value = false
  emit("blur")
})
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "m-search"
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
