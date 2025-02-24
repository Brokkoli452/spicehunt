import './index.scss';
import plus from '../../assets/icons/plus.svg'

export default function AddIngredientBtn(props) {
    return (
        <div onClick={props.onClick} className="add-ingredient-btn">
            <img className="plus-icon" src={plus} alt="" />
        </div>
    )
}