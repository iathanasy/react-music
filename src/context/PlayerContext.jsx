import {createContext, useState, useRef, useEffect } from "react";
import { tracks } from "@/data/data";

/**
 * 使用 Context 深层传递参数
 */
export const PlayerContext = createContext()
const PlayerContextProvider = (props) =>{

    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const [playlist, setPlaylist] = useState(tracks)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.50)
    const [isShuffled, setIsShuffled] = useState(false)

    const audioRef = useRef(null)

    const [open, setOpen] = useState(false);
    const [fullPlayer, setFullPlayer] = useState(false);

    useEffect(()=>{
        if(audioRef.current){
            // 异常事件
            // audioRef.current.addEventListener("error", () => {
            //     console.error(`Error loading: ${audioRef.current.src}`);
            // })
            // 初始化音量
            audioRef.current.volume = volume
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
        setCurrentTrackIndex(
            (currentTrackIndex - 1 + playlist.length) % playlist.length
        )
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

    /**
     * 展示播放列表
     */
    const showDrawer = () => {
        setOpen(true);
    }
    /**
     * 关闭播放列表
     */
    const closeDrawer = () => {
        setOpen(false);
    }
    
    const toggleFullPlayer = () => {
        console.log('fullPlayer --> ' + fullPlayer)
        setFullPlayer(!fullPlayer)
    }

    /**
     * 需要传递的函数、变量
     */
    const contextValue = {
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
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider