import { useState, useRef, useEffect, useContext } from "react";
import {Slider,Affix,Button,Divider, Space, Typography,Tooltip,Drawer,List,Avatar,theme,Tag } from "antd";
import { PlayCircleOutlined,PauseCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined,MenuUnfoldOutlined,SoundOutlined,MutedOutlined,CaretRightOutlined,PauseOutlined,CloseCircleOutlined,MenuFoldOutlined,FullscreenOutlined,FullscreenExitOutlined } from '@ant-design/icons';
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
import { NavLink } from "react-router-dom";

// yarn add styled-components
// https://www.npmjs.com/package/styled-components
// import styled from 'styled-components';

const { Text } = Typography;


export default function MainPlayer(){
    const {playlist} = useContext(PlayerContext)
    return (
        <>
            {playlist?.length === 0 ? '' : <MainPlayerBody />}
        </>
    )
}
 function MainPlayerBody(){
    const { token } = theme.useToken();

    const {
        audioRef,
        playlist,
        isPlaying, setIsPlaying,
        isMuted, setIsMuted,
        currentTrackIndex,setCurrentTrackIndex,
        duration, setDuration,
        currentTime, setCurrentTime,
        volume, setVolume,
        open, setOpen,
        fullPlayer, setFullPlayer,
        togglePlayPause,
        playNextTrack,
        playPreviousTrack,
        handleTimeChange,
        handleVolumeChange,
        toggleMute,
        tooltipVolume,
        tooltipTime,
        formatTime,
        showDrawer,
        closeDrawer,
        toggleFullPlayer
    } = useContext(PlayerContext)
    return (
        <div className={playlist ? '' : 'main-player-hide'}>
            <div className="main-player">
            <audio 
                ref={audioRef} 
                src={playlist[currentTrackIndex]?.url}
                onVolumeChange={()=>{setVolume(audioRef.current.volume)}} />
            {/* 播放信息 */}
            <div className="play-data">
                <div className="cover">
                    <Avatar shape="square" size={60} src={playlist[currentTrackIndex]?.pic} className="cover-img" />
                    {fullPlayer ? <FullscreenExitOutlined className="cover-icon" onClick={toggleFullPlayer}/> : <FullscreenOutlined className="cover-icon" onClick={toggleFullPlayer}/>}
                </div>
                <div className="info text-truncate">
                    <h3 className="name" title={playlist[currentTrackIndex]?.name}>{playlist[currentTrackIndex]?.name}</h3>
                    {playlist[currentTrackIndex]?.artist.map((item, index) => {
                        return (
                        <NavLink key={item.id} to={`/artist?id=${item.id}`}>
                            <Tag color="magenta" title={item.name}>{item.name}</Tag>
                        </NavLink>
                        );
                    })}
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
                        <PauseOutlined onClick={togglePlayPause} className="play-icon" style={{fontSize:"35px"}}/>
                        :
                        <CaretRightOutlined onClick={togglePlayPause} className="play-icon" style={{fontSize:"35px"}}/>
                    }
                    </Tooltip>
                    <Tooltip title="下一首">
                        <StepForwardOutlined className="play-icon" onClick={playNextTrack}/>
                    </Tooltip>
                </div>
                <div className="player-slider">
                    <span className="player-time">{formatTime(currentTime)}</span>
                    <Slider
                        railBg="red"
                        railHoverBg={"rgba(0, 0, 0, 0.5)"}
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
                    {
                        open ? <MenuFoldOutlined className="play-icon" onClick={closeDrawer}/> : <MenuUnfoldOutlined className="play-icon" onClick={showDrawer}/>
                    }
                </Tooltip>
            </div>
        </div>

        {/*全屏播放器*/}
        {fullPlayer && <FullPlayer /> }
        <MianPlayDrawer />
        </div>
    )
}

const MianPlayDrawer = ()=>{
    const {
        playlist,
        isPlaying, setIsPlaying,
        currentTrackIndex,setCurrentTrackIndex,
        open, setOpen,
        togglePlayPause,
        selectTrack,
        clearTrack,
        clearAll,
        closeDrawer,
    } = useContext(PlayerContext)
    return (
        <div>
            <Drawer
                // style={{height: '88vh'}}
                // mask={false}
                title="播放列表"
                placement="right"
                onClose={closeDrawer}
                open={open}
                keyboard={true}
                width={350}
            >
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={playlist}
                    header={<div className="play-list-header">
                                <span>共{playlist.length}首</span>
                                <div>
                                        <Button type="text" onClick={clearAll}>清空列表</Button>
                                </div>
                            </div>}
                    renderItem={(item, index) => (
                        <List.Item className={currentTrackIndex === index ?'play-list play-list-active':'play-list'}>
                            <List.Item.Meta
                                style={{width:'130px'}}
                                avatar={
                                    <div className="play-list-avatar">
                                        <Avatar shape="square" size={40} src={item.pic}/>
                                        {(isPlaying && currentTrackIndex === index) ?
                                        <PauseCircleOutlined className="drawer-play-icon play-list-icon" onClick={togglePlayPause}/> 
                                        : 
                                        <PlayCircleOutlined className="drawer-play-icon play-list-icon" onClick={() => selectTrack(index)}/>
                                        }
                                    </div>
                                }
                                title={<div className="play-list-name text-truncate" title={item.name}>{item.name}</div>}
                                description={
                                    item.artist.map((m) => {
                                        return (
                                        <NavLink key={m.id} to={`/artist?id=${m.id}`}>
                                            <span className="play-list-artist text-truncate" color="magenta" title={m.name}>{m.name}</span>
                                        </NavLink>
                                        );
                                    })
                                }
                            />
                            <span>
                                {(isPlaying && currentTrackIndex === index) ?
                                <PauseCircleOutlined className="drawer-play-icon" onClick={togglePlayPause}/> 
                                : 
                                <PlayCircleOutlined className="drawer-play-icon" onClick={() => selectTrack(index)}/>
                                }
                                &nbsp;
                                <CloseCircleOutlined className="drawer-play-icon" onClick={() => clearTrack(index)}/>
                            </span>
                        </List.Item>
                    )}
                />
                
            </Drawer>
        </div>
    )
}