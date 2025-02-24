import {useState} from 'react';
import './index.scss';
import $api from "../../services/api";
import SetupContent from "../SetupContent"

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
            <SetupContent />
        </div>
    )
}

export default ContentBox