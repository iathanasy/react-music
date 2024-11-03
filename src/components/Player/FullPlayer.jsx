import React, { useState, useEffect, useRef } from 'react';
import { Layout, Typography, Button, Tag, Input, Badge } from 'antd';
import { 
  HeartOutlined,
  PlusOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  SettingOutlined,
  MailOutlined,
  SkinOutlined,
  MessageOutlined,
  PlayCircleFilled,
  PauseCircleFilled,
  StepBackwardFilled,
  StepForwardFilled,
  RetweetOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;// import './FullPlayer.module.css';
import './FullPlayer.css';
// css 写法： https://www.w3schools.com/react/react_css.asp

const lyrics= [
  { time: 0, text: "作曲：陈小奇" },
  { time: 5, text: "带走一盏渔火 让他温暖我的双眼" },
  { time: 10, text: "留下一段真情 让它停泊在枫桥边" },
  { time: 15, text: "无助的我 已经疏远了那份情感" },
  { time: 20, text: "许多年以后却发觉 又回到你面前" },
  { time: 25, text: "留连的钟声 还在敲打我的无眠" },
  { time: 30, text: "尘封的日子 始终不会是一片云烟" },
  { time: 35, text: "久违的你 一定保存着那张笑脸" },
  { time: 40, text: "许多年以后 能不能接受彼此的改变" },
  { time: 45, text: "月落乌啼总是千年的风霜" },
];
export default function FullPlayer() {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  return (
    <Layout className='full-player-main'>
      <Content>main content</Content>
  </Layout>
  );
}