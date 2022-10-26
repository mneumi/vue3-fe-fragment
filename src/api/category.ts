import { requester } from "@/util/requester"
import { IResponse, ICategory } from "./type"

const getCategory = () => {
  return requester.request<IResponse<ICategory>>({
    method: "GET",
    url: "/category"
  })
}

export { getCategory }
