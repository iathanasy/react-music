import {Slider,Affix} from "antd";
import './MainPlayer.scss'
export default function MainPlayer(){
    return (
        <div className="main-player">
                {/*进度条*/}
                <Slider defaultValue={30} className="player-slider"/>
                <div className="play-data">
                    123
                </div>
        </div>
    )
}