import {Slider,Affix} from "antd";
import './MainPlayer.scss'
export default function MainPlayer(){
    return (
        <div className="main-player">
            {/* 播放信息 */}
            <div className="play-data">
                111
            </div>
            {/* 控制 */}
            <div className="play-control">
                <div>222</div>
                <Slider defaultValue={30} className="player-slider"/>
            </div>
            {/* 功能 */}
            <div className="play-menu">
                333
            </div>
        </div>
    )
}