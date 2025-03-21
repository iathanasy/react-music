// npm install antd --save
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeartOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MutedOutlined,
    HomeOutlined,
    LeftCircleOutlined,
    RightCircleOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Divider, theme } from 'antd';
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
const { Header, Sider, Content,Footer } = Layout;

import './LayoutIndex.scss'
import LogoVite from '@/assets/vite.svg'
import MainPlayer from "@/components/Player/MainPlayer";
import {oauthLogin} from "@/apis/user";

const items=[
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
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
        label: '授权码登录',
        key: '/oauth',
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
        if(value.key === '/oauth'){
            const params = {
                client_id: 'client001',
                response_type: 'code',
                scope: 'all',
                redirect_uri: 'https://www.baidu.com'
            }
             oauthLogin(params)
        }else{
            navigate( value.key )
        }

    }

    function back(){
        navigate(-1)
    }

    function forward(){
        navigate(1)
    }

    // 菜单高亮
    const location = useLocation()
    const selectedKey = location.pathname

    return (
        <div className='warp'>
            <div className="warp-content">
                <div className='content-left'>
                    {/*侧边栏*/}
                    <Sider trigger={null} collapsible collapsed={collapsed} theme="light" style={{
                        // background: '#f1f5f9',
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
                            selectedKeys={selectedKey}
                            items={items}
                            onClick={onMenuClick}
                            style={{
                                // background: '#f1f5f9',
                                border: 'none',

                            }}
                        />
                    </Sider>
                </div>
                <div className='content-right'>
                    <Layout className='layout-content'>
                        <Header
                            className='child-header'
                            style={{
                                padding: 0,
                                borderBottom: '1px solid rgb(235, 237, 240)',
                                background: colorBgContainer,
                            }}
                        >
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined style={{fontSize: '23px'}}/> : <MenuFoldOutlined style={{fontSize: '23px'}}/>}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    width: 64,
                                    height: 64,
                                }}
                            />

                            <Button
                                type="text"
                                icon={<LeftCircleOutlined style={{fontSize: '23px'}}/>}
                                onClick={back}
                                style={{
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            
                            <Button
                                type="text"
                                icon={<RightCircleOutlined style={{fontSize: '23px'}}/>}
                                onClick={forward}
                                style={{
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Header>
                        {/*路由页面*/}
                        <Content
                            className='child-content'
                            style={{
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            {/* 指定路由组件呈现的位置 */}
                            <div>
                                {element}
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
            <div className="warp-footer">
                {/*全局播放器*/}
                <MainPlayer />
            </div>
        </div>
    )
}
