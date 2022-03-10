import { useEffect, useState } from "react";

const RadioInput = ({
    options,
    checked,
    updateChecked
}) => {
    const [state, setState] = useState(checked);

    useEffect(() => {
        if(state) {
            updateChecked(state)
        }
    },[state]);

    let list  = options.map((option, index) => (
        <div
        key = {index}
        className={`radio-btn-wrapper ${state === option ?
            "radio-btn-wrapper-checked" :
            undefined}`}>
        <div
            className="radio-btn-circle"
            onClick={() => setState(option)} />
        <span>{option}</span>
    </div>
    ))

    return (

        <div className="radio-btn">
           {list}
        </div>

    )
}

export default RadioInput;