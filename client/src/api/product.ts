import { IProduct } from "../interface/product"
import instance from "./config"
const user = JSON.parse(localStorage.getItem("user")!)

export const getAll = () => {
    return instance.get("/products")
}
export const getOne = (id: Number | String) => {
    return instance.get(`/products/${id}`)
}
export const getdelete = (id: Number | String) => {
    return instance.delete(`/products/` + id)
}
export const getAddProduct = (product: IProduct) => {
    return instance.post("/products", product)
}
export const getUpdateProduct = (product: IProduct) => {
    return instance.put(`/products/${product._id}`, product)
}
