import './index.scss';

export default function Ingredient(params) {
    return (
        <div onClick={params.onClick} className="ingredient">
            {params.name}
        </div>
    )
}