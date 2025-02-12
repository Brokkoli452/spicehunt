import {useState} from 'react';
import './index.scss';
import $api from "../../services/api";

function ContentBox() {
    const [res, resSet] = useState([{image: '', title: 'No such recipe found'}])
    const [textValue, textValueSet] = useState('')

    function query() {
        $api(textValue)
            .then((response) => {
                console.log('query sent');
                if (response.data) {
                    resSet(response.data)
                }
            })
            .catch((e) => console.error(e))
    }

    return (
        <div className="content-box">
            <input
                onKeyDown={(e) => {
                        if (e.key ==='Enter' && e.target === e.currentTarget) {
                            query()
                        }
                    }
                }
               value={textValue}
               onChange={(e) => textValueSet(e.target.value)}
               className="content-box__input"/>
            <div>
                {(res[0].image) ? <img src={res[0].image} alt=""/> : ''}
                {res[0].title}
            </div>
        </div>
    )
}

export default ContentBox