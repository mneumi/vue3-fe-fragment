import { defineStore } from "pinia"
import { getCategory } from "@/api/category"
import { INIT_CATAGORY_ITEM } from "@/constant"
import type { ICategory } from "@/api/type"

interface IState {
  categorys: ICategory[]
}

const useCategoryStore = defineStore("category", {
  state: (): IState => {
    return {
      categorys: INIT_CATAGORY_ITEM
    }
  },
  getters: {},
  actions: {
    async getCategorys() {
      const result = await getCategory()
      this.categorys.push(...result.categorys)
    }
  },
  persist: true
})

export { useCategoryStore }
