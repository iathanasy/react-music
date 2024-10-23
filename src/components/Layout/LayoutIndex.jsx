// npm install antd --save
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeartOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MutedOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Divider, theme } from 'antd';
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
const { Header, Sider, Content } = Layout;

import './LayoutIndex.scss'
import LogoVite from '@/assets/vite.svg'
import MainPlayer from "@/components/Player/MainPlayer";

const items=[
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '发现音乐',
        key: '/discover',
        icon: <HeartOutlined />,
    },
    {
        label: '歌手',
        key: '/artist',
        icon: <UserOutlined />,
    },
    {
        label: '歌单',
        key: '/playlist',
        icon: <VideoCameraOutlined />,
    },
    {
        label: '专辑',
        key: '/album',
        icon: <MutedOutlined />
    }
]
export function LayoutIndex({element}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate()
    const onMenuClick = ( value ) => {
        navigate( value.key )
    }

    // 菜单高亮
    const location = useLocation()
    const selectedKey = location.pathname

    return (
        <>
            {/*主框架*/}
            <Layout style={{
                minHeight: '100vh',
            }}>
                {/*侧边栏*/}
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light" style={{
                    background: '#f1f5f9'
                }}>
                    <div className="demo-logo-vertical">
                        <img src={LogoVite} alt="Logo" />
                        <span>Music</span>
                    </div>
                    {/*导航栏*/}
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={[selectedKey]}
                        selectedKeys={ selectedKey }
                        items={items}
                        onClick={ onMenuClick }
                        style={{
                            background: '#f1f5f9'
                        }}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            borderBottom: '1px solid rgb(235, 237, 240)',
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    {/*路由页面*/}
                    <Content
                        style={{
                            // margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {/* 指定路由组件呈现的位置 */}
                        <div>{element}</div>
                    </Content>
                </Layout>
            </Layout>
            {/*播放列表*/}
            {/*全局播放器*/}
            <MainPlayer />
            {/*全屏播放器*/}
        </>
    )
}
