import { useState } from "react";
const TextInput = ({
    placeholder,
    defaultValue,
    className
}) => {
    const [value, setValue] = useState(defaultValue || "");
    return (
        <input
            className={`text-input ${className}`}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}>
        </input>
    );
}

export default TextInput;