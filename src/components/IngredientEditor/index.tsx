import './index.scss';
import Ingredient from "../Ingredient";
import AddIngredientBtn from "../AddIngredientBtn";
import {useState} from "react";

export default function IngredientEditor(props: object) {
    const [ingredients, setIngredients] = props.state

    function addIngredient() {
        const newArr = [...ingredients];
        const newIngredient = {
            id: newArr.length + 1,
            name: prompt('Назовите ингредиент: ', 'Пусто')
        }

        newArr.push(newIngredient);
        setIngredients(newArr);
    }

    function changeIngredientName(id: number) {
        const index = ingredients.findIndex(x => x.id === id)
        const newArr = [...ingredients]
        console.log(newArr[index].name)
        newArr[index].name = prompt('Назовите ингредиент: ', 'Пусто')
        setIngredients(newArr)
    }

////////////// Рендер //////////////
    return (
        <div className="editor">
            <div className="editor__header">
                <div className="title">{props.text}</div>
            </div>
            <div className="ingredients__body" >

                {ingredients.map(ing => (
                    <Ingredient key={ing.id} onClick={() => changeIngredientName(ing.id)} name={ing.name} />
                ))}

                <AddIngredientBtn onClick={addIngredient}/>
            </div>
        </div>
    )
}