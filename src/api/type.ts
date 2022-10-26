export interface IResponse<T> {
  success: boolean
  code: number
  message: string
  data: T
}

export interface ICategory {
  categorys: {
    id: string
    name: string
    col: number
    urlname: string
  }[]
}
