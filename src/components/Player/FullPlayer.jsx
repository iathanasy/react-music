import React, { useState, useEffect, useRef,useContext } from 'react';
import { Layout, Typography, Button, Tag, Input, Badge } from 'antd';
import { 
  DownOutlined,
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
import { PlayerContext } from '@/context/PlayerContext';
import { parseLrc } from '@/utils/lyric';
// css 写法： https://www.w3schools.com/react/react_css.asp


export default function FullPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricLines, setLyricLines] = useState(0);
  const {toggleFullPlayer,audioRef,playlist,currentTrackIndex} = useContext(PlayerContext)

  // const lrc = playlist[currentTrackIndex].lrc ? playlist[currentTrackIndex].lrc : '暂无歌词'
  console.log('11111111111')
  // const parsedResult = parseLrc(lrc);//对歌词进行处理
  // setLyricLines(parsedResult);//利用useState设置歌词

  const audio = audioRef.current

  return (
    <Layout className='full-player-main'>
      <Content>
        <h2><DownOutlined onClick={toggleFullPlayer}/></h2>
        
      </Content>
  </Layout>
  );
}