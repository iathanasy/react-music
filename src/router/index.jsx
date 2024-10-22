import {lazy, Suspense} from "react";

import Login from "@/pages/Login/index.jsx";
import Home from '@/pages/Home/index.jsx';

const Discover = lazy(() => import('@/pages/Discover/layout.jsx'))
const DiscoverPlayLists = lazy(() => import('@/pages/Discover/playlists.jsx'))
const DiscoverTopLists = lazy(() => import('@/pages/Discover/toplists.jsx'))
const DiscoverNew = lazy(() => import('@/pages/Discover/new.jsx'))
const DiscoverArtists = lazy(() => import('@/pages/Discover/artists.jsx'))


const Artist = lazy(() => import('@/pages/Artist/layout'))
const ArtistAlbums = lazy(() => import('@/pages/Artist/albums'))
const ArtistSongs = lazy(() => import('@/pages/Artist/songs'))


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
    // 发现
    {
        path: '/discover',
        element: <Suspense fallback={'加载中'}><Discover /></Suspense>,
        children: [
            //歌单广场
            {
                index: true,
                element: <Suspense fallback={'加载中'}><DiscoverPlayLists /></Suspense>
            },
            {
                path: 'playlists',
                element: <Suspense fallback={'加载中'}><DiscoverPlayLists /></Suspense>
            },
            //排行榜
            {
                path: 'toplists',
                element: <Suspense fallback={'加载中'}><DiscoverTopLists /></Suspense>
            },
            //最新音乐
            {
                path: 'new',
                element: <Suspense fallback={'加载中'}><DiscoverNew /></Suspense>
            },
            //歌手
            {
                path: 'artists',
                element: <Suspense fallback={'加载中'}><DiscoverArtists /></Suspense>
            }
        ]

    },
    //歌手
    {
        path: '/artist',
        element: <Suspense fallback={'加载中'}><Artist /></Suspense>,
        children: [
            //专辑
            {
                index: true,
                element: <Suspense fallback={'加载中'}><ArtistAlbums /></Suspense>
            },
            {
                path: 'albums',
                element: <Suspense fallback={'加载中'}><ArtistAlbums /></Suspense>
            },
            //单曲
            {
                path: 'songs',
                element: <Suspense fallback={'加载中'}><ArtistSongs /></Suspense>
            }
        ]

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
