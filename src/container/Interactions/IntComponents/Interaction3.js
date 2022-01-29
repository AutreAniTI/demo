import { useEffect, useState } from "react";
import ToggleButton from "../../../components/Button/ToggleButton";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const Interaction3 = ({ index, setDisabled, setIncomplete , active}) => {
    const message = MESSAGES[index];
    const [state, setState] = useState({});
    useEffect(() => {
        if(active) {
            if(!state.proposal) {
                setDisabled(true);
            }else {
                setDisabled(false)
            }
      
        }
        console.log(state)
    },[state, active])

    return (
        <div className="int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox
                text={message.text} />
            <div className="toggler-wrapper">
                <div
                className = "toggle-wrapper-item">
                    <span className = "label">Proposal: </span>
                    <ToggleButton
                        handleChange={(bool) => setState({...state, proposal: bool })} />
                </div>
                <div
                className = "toggle-wrapper-item">
                    <span className = "label">Contract: </span>
                    <ToggleButton
                        handleChange={(bool) => setState({...state, contract: bool })} />
                </div>
            </div>
        </div>
    );
}

export default Interaction3;