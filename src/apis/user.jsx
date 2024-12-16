import {request} from "@/utils/request";
import qs from 'qs';

/**
 * 登录请求，用于用户登录
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export const login = (params) =>{
    return request({
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: '/oauth/login',
        data: qs.stringify(params),
    })
}

/**
 * 授权码登录，参数拼接在url后面
 */
export const oauthLogin =(params) =>{
    return request({
        method: 'GET',
        url: '/oauth/authorize',
        params
    })
}

/**
 * 获取用户信息
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUserInfo = ()=>{
    return request({
        method: 'GET',
        url: '/user/profile'
    })
}
