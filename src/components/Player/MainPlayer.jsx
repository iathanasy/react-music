import { useState, useRef, useEffect } from "react";
import {Slider,Affix,Button,Divider, Space, Typography,Tooltip } from "antd";
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined,MenuUnfoldOutlined,SoundOutlined,MutedOutlined,CaretRightOutlined,PauseOutlined } from '@ant-design/icons';
import './MainPlayer.scss'
import coverImg from '@/assets/placeholder.svg'
import { tracks } from "@/data/data";
// yarn add react-ionicons
// https://react-icons.github.io/react-icons/
import {
	PauseCircle,
	PlayBack,
	PlayCircle,
	PlayForward,
	VolumeMediumOutline,
	VolumeMuteOutline,
} from "react-ionicons";

// yarn add styled-components
// https://www.npmjs.com/package/styled-components
// import styled from 'styled-components';

export default function MainPlayer(){

    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const [playlist, setPlaylist] = useState(tracks)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(1)
    const [isShuffled, setIsShuffled] = useState(false)

    const audioRef = useRef(null)

    useEffect(()=>{
        if(audioRef.current){
            // 加载元数据
            audioRef.current.addEventListener('loadedmetadata', ()=>{
                setDuration(audioRef.current.duration)
            })
            // 更新播放时间
            audioRef.current.addEventListener('timeupdate', ()=>{
                setCurrentTime(audioRef.current.currentTime)
            })
            // 播放完成，进入下一首
            audioRef.current.addEventListener('ended', playNextTrack)
        }
        return () =>{
            if(audioRef.current){
                audioRef.current.addEventListener('loadedmetadata', ()=>{})
                audioRef.current.addEventListener('timeupdate', ()=>{})
                audioRef.current.addEventListener('ended', playNextTrack)
            }
        }
    },[])

    useEffect(()=>{
        if(audioRef.current){
            if(isPlaying){
                // 播放
                audioRef.current.play()
            }else{
                // 暂停
                audioRef.current.pause()
            }
        }
    }, [isPlaying, currentTrackIndex])

    /**
     * 触发暂停
     */
    const togglePlayPause = ()=>{
        setIsPlaying(!isPlaying)
    }

    /**
     * 下一首
     */
    const playNextTrack = ()=>{
        setCurrentTrackIndex((prevIndex) =>{
            if(isShuffled){
                // 随机播放
                let newIndex
                do{
                    newIndex = Math.floor(Math.random() * playlist.length)
                }while(newIndex === prevIndex)
                return newIndex
            }else{
                return (prevIndex + 1) % playlist.length
            }
        })
        setIsPlaying(true)
    }

    /**
     * 上一首
     */
    const playPreviousTrack = ()=>{
        // 当前播放歌曲索引
        setCurrentTrackIndex((prevIndex)=>{
            (prevIndex - 1 + playlist.length) % playlist.length
        })
        setIsPlaying(true)
    }

    /**
     * 歌曲时间动态变化
     * @param {*} value []
     */
    const handleTimeChange = (value)=>{
        const newTime = value
        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
    }

    /**
     * 歌曲音量变化
     * @param {*} value []
     */
    const handleVolumeChange =(value)=>{
        const newVolume = value
        setVolume(newVolume)
        audioRef.current.volume = newVolume
        // 静音
        let mute = newVolume === 0;
        setIsMuted(mute)
        audioRef.current.muted = mute
    }

    /**
     * 触发静音
     */
    const toggleMute =()=>{
        setIsMuted(!isMuted)
        audioRef.current.muted = !isMuted
    }

    /**
     * 触发随机播放
     */
    const toggleShuffle =()=>{
        setIsShuffled(!isShuffled)
    }

    /**
     * 选择歌曲
     * @param {*} index 
     */
    const selectTrack =(index)=>{
        setCurrentTrackIndex(index)
        setIsPlaying(true)
    }

    // 格式化音量提示
    const tooltipVolume =(value)=> Math.ceil(value * 100);
    // 格式化歌曲进度条提示
    const tooltipTime =(value)=> `${formatTime(value)}`;

    /**
     * 格式化播放时间
     * @param {*} time 
     * @returns 
     */
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
      }


    return (
        <div className="main-player">
            <audio 
                ref={audioRef} 
                src={playlist[currentTrackIndex].source}
                onVolumeChange={()=>{setVolume(audioRef.current.volume)}} />
            {/* 播放信息 */}
            <div className="play-data">
                <div className="cover">
                    <img src={playlist[currentTrackIndex].cover} class="cover-img" />
                </div>
                <div className="info">
                    <h3 className="name">{playlist[currentTrackIndex].name}</h3>
                    <span className="artists">{playlist[currentTrackIndex].artist}</span>
                </div>
            </div>
            {/* 控制 */}
            <div className="play-control">
                <div className="play-btn">
                    <Tooltip title="上一首">
                        <StepBackwardOutlined className="play-icon" onClick={playPreviousTrack}/>
                    </Tooltip>
                    <Tooltip title={isPlaying ? '暂停' : '播放'}>
                        {isPlaying ?
                        <PauseOutlined onClick={togglePlayPause} className="play-icon" style={{fontSize:"30px"}}/>
                        :
                        <CaretRightOutlined onClick={togglePlayPause} className="play-icon" style={{fontSize:"30px"}}/>
                    }
                    </Tooltip>
                    <Tooltip title="下一首">
                        <StepForwardOutlined className="play-icon" onClick={playNextTrack}/>
                    </Tooltip>
                </div>
                <div className="player-slider">
                    <span className="player-time">{formatTime(currentTime)}</span>
                    <Slider
                        onChange={handleTimeChange}
                        min={0}
                        max={duration}
                        step={1}
                        value={[currentTime]}
                        tooltip={{
                            formatter: tooltipTime
                        }}
                        className="player-seekbar"
                        />  
                    <span className="player-time">{formatTime(duration)}</span>
                </div>
                
            </div>
            {/* 功能 */}
            <div className="play-menu">
                {/* <PlayCircle /> */}
                <Tooltip title="列表循环">
                    <RetweetOutlined className="play-icon"/>
                </Tooltip>
                <span className="vertical"></span>
                <div className="volume-col">

                    <Tooltip title={isMuted ? '静音' : '音量'}>
                        {
                            isMuted ?
                                <MutedOutlined className="play-icon" onClick={toggleMute}/>
                                :
                                <SoundOutlined className="play-icon" onClick={toggleMute}/>
                        }

                    </Tooltip>
                    {/* <MutedOutlined className="play-icon" /> */}
                    <Slider
                            onChange={handleVolumeChange}
                            min={0}
                            max={1}
                            step={0.01}
                            value={[volume]}
                            tooltip={{
                                formatter: tooltipVolume
                              }}
                            className="player-volume"
                            />  
                    <span className="vertical"></span>
                </div>
                <Tooltip title="播放列表">
                    <MenuUnfoldOutlined className="play-icon"/>
                </Tooltip>
            </div>
        </div>
    )
}