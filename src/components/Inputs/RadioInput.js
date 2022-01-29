import { useState } from "react"

const RadioInput = ({

}) => {
    const [state, setState] = useState(true);

    return (

        <div className="radio-btn">
            <div
                className={`radio-btn-wrapper ${state ?
                    "radio-btn-wrapper-checked" :
                    undefined}`}>
                <div
                    className="radio-btn-circle"
                    onClick={() => setState(true)} />
                <span>Yes</span>
            </div>
            <div
                className={`radio-btn-wrapper ${!state ?
                    "radio-btn-wrapper-checked" :
                    undefined}`}>
                <div
                    className="radio-btn-circle"
                    onClick={() => setState(false)} />
                <span>No</span>
            </div>
        </div>

    )
}

export default RadioInput;