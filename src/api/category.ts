import { requester } from "@/util/requester"
import { ICategorys } from "./type"

const getCategory = () => {
  return requester.request<any, ICategorys>({
    method: "GET",
    url: "/category"
  })
}

export { getCategory }
