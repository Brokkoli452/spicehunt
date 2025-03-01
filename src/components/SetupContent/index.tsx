import './index.scss';
import IngredientEditor from "../IngredientEditor";
import plusSvg from "../../assets/icons/plus.svg";
import banSvg from "../../assets/icons/banSvg.svg";
import {useState} from "react";
import $api from "../../services/api.ts";
import randomize from "../../services/randomize";

export default function SetupContent() {
    const [ingredients, setIngredients] = useState<object[]>([])
    const [exclusions, setExclusions] = useState<object[]>([])

    function callApi() {
        const ingredientsArr = ingredients.map((ingredient: object) => ingredient.name).join(',')
        const exclusionsArr = exclusions.map((exclusion: object) => exclusion.name).join(',')
        console.log("Запрос на: ", ingredientsArr)
        $api(ingredientsArr, exclusionsArr)
            .then((body) => {
                if (body.data) {
                    console.log(body.data.results[randomize(0, body.data.results.length - 1)])
                } else {
                    console.log('Нет рецептов')
                }
            })
    }

    return (
        <div className="setup">
            <div className="editors_wrap">
                <div className="editors_wrap__ingredients">
                    <img src={plusSvg} alt="" draggable={false}/>
                    <IngredientEditor state={[ingredients, setIngredients]} icon={plusSvg} text="Ingredients"/>
                </div>

                <div className="editors_wrap__exlusions">
                    <img src={banSvg} alt="" draggable={false}/>
                    <IngredientEditor state={[exclusions, setExclusions]} icon={banSvg} text="Exclusions"/>
                </div>
            </div>
            <div className="options_section">
                <div onClick={() => callApi()} className="options_section__SubmitBtn">
                    Randomize
                </div>
            </div>
        </div>
    )
}