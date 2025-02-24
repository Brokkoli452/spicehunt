import './index.scss';
import IngredientEditor from "../IngredientEditor";
import plusSvg from "../../assets/icons/plus.svg";
import banSvg from "../../assets/icons/banSvg.svg";

export default function SetupContent() {
    return (
        <div className="setup">
            <div className="setup__ingredients">
                <img src={plusSvg} alt="" draggable={false}/>
                <IngredientEditor icon={plusSvg} text="Ingredients"/>
            </div>

            <div className="setup__exlusions">
                <img src={banSvg} alt="" draggable={false}/>
                <IngredientEditor icon={banSvg} text="Exclusions"/>
            </div>
        </div>
    )
}