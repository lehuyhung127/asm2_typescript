import { ICategory } from "../interface/product"
import instance from "./config"
const user = JSON.parse(localStorage.getItem("user")!)

export const getAllCategory = () => {
    return instance.get("/categories")
}
export const getAddCategory = (categories: ICategory) => {
    return instance.post("/categories", categories)
}
export const getdeleteCategory = (id: number | string) => {
    return instance.delete(`/categories/` + id)
}
export const getUpdateCategories = (categories: ICategory) => {
    return instance.put(`/categories/${categories._id}`, categories)
}