import React, { useState, useEffect, useRef,useContext } from 'react';
import { Layout, Typography, Button, Tag, Input, Badge,List } from 'antd';
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
// css 写法： https://www.w3schools.com/react/react_css.asp


export default function FullPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lyricLines, setLyricLines] = useState([]);
  const listRef = useRef(null)
  const {toggleFullPlayer,audioRef,playlist,currentTrackIndex} = useContext(PlayerContext)

  const lrcContent = playlist[currentTrackIndex].lrc
  useEffect(() => {
    if(!lrcContent) return
    // Parse LRC content
    const lines = lrcContent.split('\n')
    const parsedLyrics = lines
      .map(line => {
        const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/)
        if (match) {
          const [,minutes, seconds, hundredths, text] = match
          const time = parseInt(minutes) * 60 + parseInt(seconds) + parseInt(hundredths) / 100
          return  { time: time, text: text.trim() }
        }
        return null
      })
      .filter((line) => line !== null)
      setLyricLines(parsedLyrics)
  }, [lrcContent])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateLyrics = () => {
      const currentTime = audio.currentTime
      const index = lyricLines.findIndex((lyric, index) => 
        currentTime >= lyric.time && (index === lyricLines.length - 1 || currentTime < lyricLines[index + 1].time)
      )
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index)
        scrollToLine(index)
      }
    }

    audio.addEventListener('timeupdate', updateLyrics)
    return () => audio.removeEventListener('timeupdate', updateLyrics)
  }, [lyricLines, currentIndex])

  const scrollToLine = (index) => {
    const container = listRef.current
    const item = container.querySelector(`[data-index="${index}"]`)
    if (container && item) {
      container.scrollTop = item.offsetTop - container.offsetHeight / 2 + item.offsetHeight / 2
    }
  }
  return (
    <div className='full-player-main' >
        <h2><DownOutlined onClick={toggleFullPlayer}/></h2>
        <ul className='lyric-list' ref={listRef}>
          {lrcContent
            ? lyricLines.map((line, index) => (
                <li
                  key={index}
                  className={`${
                    index === currentIndex ? 'lyric-active' : ''
                  }`}
                  data-index={index}
                >
                {line.text}
                </li>
              ))
            :
            <li>暂无歌词</li>
          }
        </ul>
  </div>
  );
}