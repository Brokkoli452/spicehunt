import './index.scss';
import Ingredient from "../Ingredient";
import AddIngredientBtn from "../AddIngredientBtn";
import {useState} from "react";

export default function IngredientEditor(props) {
    let [ingredients, setIngredients] = useState([])

    function addIngredient (e) {
        let newArr = [...ingredients];
        const newIngredient = (
            <Ingredient text={`Ingredient #${newArr.length +1}`} />
        )
        newArr.push(newIngredient);
        setIngredients(newArr);
    }

    return (
        <div className="editor">
            <div className="editor__header">
                <div className="title">{props.text}</div>
            </div>
            <div className="ingredients__body" >
                {ingredients}
                <AddIngredientBtn onClick={addIngredient}/>
            </div>
        </div>
    )
}