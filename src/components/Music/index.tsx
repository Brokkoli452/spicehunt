import {ChangeEvent, EventHandler, useState} from "react";
import Sound from "react-sound";
import "./index.scss"
import speakerIcon from "../../assets/icons/speaker.svg"
import speakerDisabledIcon from "../../assets/icons/speaker-disabled.svg"
import {EventProps} from "@react-three/fiber";

export default function Music() {
    const [muted, setMuted] = useState(true)
    const [volume, setVolume] = useState(10)

    const toggle = () => {
        setMuted(!muted)
    }

    const handleVolumeChange = (event: ChangeEvent) => {
        const newVolume = Number(event.target.value);
        setVolume(newVolume);
    };

    return (
        <div className="speaker">
            <Sound url='sounds/main.mp3' playStatus={muted ? "STOPPED" : "PLAYING"} volume={volume} autoLoad loop/>

            {!muted ? <img className="speaker-icon" src={speakerIcon} onClick={toggle} alt=""/> : <img className="speaker-icon" src={speakerDisabledIcon} onClick={toggle} alt=""/>}
            {!muted ? <input
                className="volume-input"
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
            /> : ''}

        </div>
    )
}

