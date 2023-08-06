import { IUsers } from "../interface/product"
import instance from "./config"

export const signin = (user: IUsers) => {
    return instance.post("/signin", user)
}
export const signup = (user: any) => {
    return instance.post("/signup", user)
}
export const getAllUser = () => {
    return instance.get("/user")
}