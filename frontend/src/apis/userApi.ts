import { http } from "@/util";
import { ResType } from "./shared";


// 登录
export interface LoginParamsReq {
    mobile: string;
    code: string;
}
export const http_login = (loginform: LoginParamsReq) => {
    return http.request({
        url: "/auth/login",
        method: "POST",
        data: loginform
    })
}

// 获取用户信息
export const http_getUserInfo = () => {
    return http.request({
        url: "/user/profile",
        method: "GET"
    })
}