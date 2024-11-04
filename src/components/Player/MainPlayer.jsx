import { useState, useRef, useEffect, useContext } from "react";
import {Slider,Affix,Button,Divider, Space, Typography,Tooltip,Drawer,List,Avatar } from "antd";
import { PlayCircleOutlined,PauseCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined,MenuUnfoldOutlined,SoundOutlined,MutedOutlined,CaretRightOutlined,PauseOutlined } from '@ant-design/icons';
import './MainPlayer.scss'
import coverImg from '@/assets/placeholder.svg'

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
import { PlayerContext } from "@/context/PlayerContext";
import FullPlayer from "./FullPlayer";

// yarn add styled-components
// https://www.npmjs.com/package/styled-components
// import styled from 'styled-components';

const { Text } = Typography;

export default function MainPlayer(){
    const {
        audioRef,
        playlist,
        isPlaying, setIsPlaying,
        isMuted, setIsMuted,
        currentTrackIndex,setCurrentTrackIndex,
        duration, setDuration,
        currentTime, setCurrentTime,
        volume, setVolume,
        isShuffled, setIsShuffled,
        open, setOpen,
        fullPlayer, setFullPlayer,
        togglePlayPause,
        playNextTrack,
        playPreviousTrack,
        handleTimeChange,
        handleVolumeChange,
        toggleMute,
        selectTrack,
        tooltipVolume,
        tooltipTime,
        formatTime,
        showDrawer,
        closeDrawer,
        toggleFullPlayer
    } = useContext(PlayerContext)

    return (
        <>
            <div className="main-player">
            <audio 
                ref={audioRef} 
                src={playlist[currentTrackIndex].source}
                onVolumeChange={()=>{setVolume(audioRef.current.volume)}} />
            {/* 播放信息 */}
            <div className="play-data">
                <div className="cover">
                    <Avatar shape="square" size={60} src={playlist[currentTrackIndex].cover} class="cover-img" onClick={toggleFullPlayer}/>
                </div>
                <div className="info text-truncate">
                    <h3 className="name" title={playlist[currentTrackIndex].name}>{playlist[currentTrackIndex].name}</h3>
                    <span className="artists" title={playlist[currentTrackIndex].artist}>{playlist[currentTrackIndex].artist}</span>
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
                    <MenuUnfoldOutlined className="play-icon" onClick={showDrawer}/>

                    <Drawer
                        title="播放列表"
                        placement="right"
                        onClose={closeDrawer}
                        open={open}
                        width={350}
                    >
                          <List
                            size="small"
                            itemLayout="horizontal"
                            dataSource={playlist}
                            header={<div className="play-list-header">
                                    <span>共{playlist.length}首</span>
                                    <div>
                                        清空列表
                                    </div>
                            </div>}
                            renderItem={(item, index) => (
                            <List.Item className={currentTrackIndex === index ?'play-list play-list-active':'play-list'}>
                                <List.Item.Meta
                                    avatar={<Avatar shape="square" size={40} src={item.cover} />}
                                    title={<h5 className="play-list-name text-truncate" title={item.name}>{item.name}</h5>}
                                    description={<a href="#" className="play-list-artist text-truncate" title={item.artist}>{item.artist}</a>}
                    
                                />
                                {(isPlaying && currentTrackIndex === index) ?
                                 <PauseCircleOutlined className="play-icon" onClick={togglePlayPause}/> 
                                 : 
                                 <PlayCircleOutlined className="play-icon" onClick={() => selectTrack(index)}/>
                                 }
                            </List.Item>
                            )}
                        />
                        
                    </Drawer>
                </Tooltip>
            </div>
        </div>

        {/*全屏播放器*/}
        {fullPlayer && <FullPlayer /> }
        </>
    )
}