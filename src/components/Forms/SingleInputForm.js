import { useState } from "react";
import SendMessage from '../../assets/images/app/send-message.png';

const SingleInputForm = ({
    placeholder,
    updateValue,
    className
}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState();
    const [focused, setFocused] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value.length) {
            setError("Field is required");
            return;
        }
        updateValue(value)
    }

    const handleFocus = () => {
        setError(null);
        setFocused(true);
    }
    return (
        <form 
        className={`single-input-form ${className} ${focused? "single-input-form-focused": ""}`}
        onSubmit={handleSubmit}>
            <input
                onFocus = {handleFocus}
                onBlur = {() => setFocused(false)}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}>
            </input>
            <div
                className = "send-button"
                style = {{backgroundImage: `url(${SendMessage})`}}
                onClick={handleSubmit} />
                {
                    error? 
                    <p>{error}</p>
                    :null
                }
        </form>
    );
}

export default SingleInputForm;