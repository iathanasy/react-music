import './App.css'
// 初始化css样式 ：yarn add normalize.css OR npm install normalize.css
// import 'normalize.css'
import {LayoutIndex} from "@/components/Layout/LayoutIndex.jsx";
import React from "react";
import {useRoutes} from "react-router-dom";
// 导入路由
import routes from "@/router";

export default function App() {
    //根据路由表生成对应的路由规则
    const element = useRoutes(routes);
    return (
        <>
            <LayoutIndex element={element}/>
        </>
    )
}
