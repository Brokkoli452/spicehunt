import axios from "axios";

export default function $api (ingredients: string) {
    return axios.get('https://api.spoonacular.com/recipes/findByIngredients',
        {
            params: {ingredients: ingredients, ranking: 2},
            headers: {
                "x-api-key": "cfc5b363610142b482e1b6663997d89c"
            }
        })
}