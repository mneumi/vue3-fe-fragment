export interface IResponse<T> {
  success: boolean
  code: number
  message: string
  data: T
}

export interface ICategorys {
  categorys: ICategory[]
}

export interface ICategory {
  id: string
  name: string
  col?: number
  urlname?: string
}
