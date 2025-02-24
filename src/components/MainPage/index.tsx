import ContentBox from "../ContentBox";
import './index.scss';
import spicehunt from "../../assets/icons/spicehunt.svg";
import Broccoli from '../Broccoli';
import Music from "../Music";

function MainPage() {

    return (
        <div className="main-page">
            <Music />
            <div className="spicehunt">
                <Broccoli />
                <img className="spicehunt-title" src={spicehunt} alt="" draggable={false}/>
            </div>
            <ContentBox />
        </div>
    )
}

export default MainPage