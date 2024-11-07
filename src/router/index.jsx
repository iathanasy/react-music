import {lazy, Suspense} from "react";

import Login from "@/pages/Login/index.jsx";
import Home from '@/pages/Home/index.jsx';

const Artist = lazy(() => import('@/pages/List/artist'))
const PlayList = lazy(() => import('@/pages/List/playlist'))
const Album = lazy(() => import('@/pages/List/album'))

const Forbidden = lazy(() => import('@/pages/Status/403'))
const NotFound = lazy(() => import('@/pages/Status/404'))
const ServerError = lazy(() => import('@/pages/Status/500'))


const router = [
    // 首页
    {
        path: '/',
        element: <Suspense fallback={'加载中'}><Home /></Suspense>
    },
    //歌手
    {
        path: '/artist',
        element: <Suspense fallback={'加载中'}><Artist /></Suspense>,
    },
    //歌单
    {
        path: '/playlist',
        element: <Suspense fallback={'加载中'}><PlayList /></Suspense>,

    },
    //专辑
    {
        path: '/album',
        element: <Suspense fallback={'加载中'}><Album /></Suspense>,

    },
     // 状态
    {
        path: '/403',
        element: <Suspense fallback={'加载中'}><Forbidden /></Suspense>,
    },
    {
        path: '/404',
        element: <Suspense fallback={'加载中'}><NotFound /></Suspense>,
    },
    {
        path: '/500',
        element: <Suspense fallback={'加载中'}><ServerError /></Suspense>,
    },
    // 登录
    {
        path: '/login',
        element: <Login />
    },
    //找不到页面 404
    {
        path: '*',
        element: <NotFound />
    }
]

export default router
