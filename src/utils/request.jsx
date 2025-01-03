// 引入axios yarn add axios
import axios from 'axios'
import { getToken, clearToken } from '@/utils/token';
import {message} from "antd";

const request = axios.create({
    baseURL: 'http://127.0.0.1:9999/gateway',
    timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    //如果token存在，把它添加到请求头中的Authorization中
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    console.error(error.message)
    if (error.response.status === 401) {
        // token过期
        clearToken()
        message.error(error.response.data.message)
        window.location.href = '/login'
        return Promise.reject(error);
    }
    // 对响应错误做点什么
    message.error("请求异常")
    return Promise.reject(error);
});

export { request }
