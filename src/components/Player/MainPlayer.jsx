import {Slider,Affix,Button,Divider, Space, Typography} from "antd";
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined,MenuUnfoldOutlined,SoundOutlined } from '@ant-design/icons';
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
                <div className="play-icon">
                    <Button shape="circle" icon={<StepBackwardOutlined />} />
                    <Button shape="circle" icon={<PlayCircleOutlined style={{fontSize:"30px"}}/>} size="large" />
                    <Button shape="circle" icon={<StepForwardOutlined />} />
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
                <div className="volume-col">
                    <SoundOutlined style={{fontSize:"20px",cursor:"pointer"}}/>
                    <Slider
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={0}
                            className="player-volume"
                            />  
                    <span className="vertical"></span>
                </div>
                
                <MenuUnfoldOutlined style={{fontSize:"20px",cursor:"pointer"}}/>
            </div>
        </div>
    )
}