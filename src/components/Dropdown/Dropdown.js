import { useState } from "react";
import DropdownItem from "./DropdownItem";
import Chevron from '../../assets/icons/Icons/Chevron';

const Dropdown = ({ arr }) => {
    const [state, setState] = useState({
        open: false,
        selected: false,
    });


    const list = arr.map((elem, index) => (
        state.selected !== elem &&
        <DropdownItem
            selected={state.selected}
            setState={(obj) => setState(obj)}
            key={index}
            elem={elem}
        />
    ))


    return (
        <div
            className={`dropdown ${state.open ? "dropdown-open" : ""}`}>
            <div
                className="title dropdown-item">
                {
                    state.selected ?
                        <p className="selected">
                            {state.selected}
                        </p>
                        :
                        <p className="placeholder">
                            Select an option
                        </p>
                }
                <span
                    className="toggler"
                    onClick={() => setState({
                        ...state,
                        open: !state.open
                    })}>
                    <Chevron />
                </span>
            </div>
            {
                state.open &&
                <div
                    className="options">
                    {
                        state.selected &&
                        <div
                            className="dropdown-item"
                            onClick={() => setState({
                                selected: null,
                                open: false
                            })}>
                            <p className="placeholder">
                                Select an option
                            </p>
                        </div>
                     }
                    {list}
                </div>
            }
        </div>
    );
}

export default Dropdown;