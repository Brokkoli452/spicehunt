import './index.scss';

export default function Ingredient(params) {
    return (
        <div className="ingredient">
            {params.text}
        </div>
    )
}