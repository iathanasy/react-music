import {Slider,Affix,Button,Divider, Space, Typography,Tooltip } from "antd";
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined,MenuUnfoldOutlined,SoundOutlined,MutedOutlined,CaretRightOutlined,PauseOutlined } from '@ant-design/icons';
import './MainPlayer.scss'
import coverImg from '@/assets/placeholder.svg'
export default function MainPlayer(){
    return (
        <div className="main-player">
            {/* 播放信息 */}
            <div className="play-data">
                <div className="cover">
                    <img src={coverImg} class="cover-img" />
                </div>
                <div className="info">
                    <h3 className="name">歌曲名称</h3>
                    <span className="artists">歌手</span>
                </div>
            </div>
            {/* 控制 */}
            <div className="play-control">
                <div className="play-btn">
                    <Tooltip title="上一首">
                        <StepBackwardOutlined className="play-icon"/>
                    </Tooltip>
                    <Tooltip title="播放">
                        <CaretRightOutlined className="play-icon" style={{fontSize:"30px"}}/>
                        {/* <PauseOutlined className="play-icon" style={{fontSize:"30px"}}/> */}
                    </Tooltip>
                    <Tooltip title="下一首">
                        <StepForwardOutlined className="play-icon"/>
                    </Tooltip>
                </div>
                <div className="player-slider">
                    <span className="player-time">00:00</span>
                    <Slider
                        min={0}
                        max={274}
                        step={0.01}
                        defaultValue={0}
                        className="player-seekbar"
                        />  
                    <span className="player-time">04:34</span>
                </div>
                
            </div>
            {/* 功能 */}
            <div className="play-menu">
                <Tooltip title="列表循环">
                    <RetweetOutlined className="play-icon"/>
                </Tooltip>
                <span className="vertical"></span>
                <div className="volume-col">
                    <Tooltip title="音量">
                        <SoundOutlined className="play-icon"/>
                    </Tooltip>
                    {/* <MutedOutlined className="play-icon" /> */}
                    <Slider
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={50}
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