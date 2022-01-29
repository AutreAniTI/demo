import { useState, useEffect } from "react";

const ToggleButton = ({
    handleChange,
    active,
}) => {
    const [state, setState] = useState(active);
    useEffect(() => {
        if (handleChange) handleChange(state)
    }, [state, active]);

    return (
        <div
            className={`toggle-button ${state?
                 "toggle-button-active": undefined}`}>
            <div
                onClick={() => setState(!state)}
                className="toggler"/>
        </div>
    );
}

export default ToggleButton;