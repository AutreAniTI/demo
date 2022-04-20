import { useEffect, useState } from "react";
import ToggleButton from "../../../components/Button/ToggleButton";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const Interaction3 = ({ index, setSliderControl, active }) => {
    const message = MESSAGES[index];
    const [state, setState] = useState({proposal: false, contract:false});
   
    useEffect(() => {
        if (active) {
            setSliderControl({
                disabled: true,
                incomplete: true
            })
        }
    }, [active])

    useEffect(() => {
        if (active) {
            if (state.contract) {
                setSliderControl({
                    disabled:!state.proposal,
                    incomplete: false
                })
            } else {
                setSliderControl({
                    disabled:!state.proposal,
                    incomplete: true
                })
            }
        }
    }, [state])

    useEffect(() => {
        if (active) {
            if (state.proposal) {
                setSliderControl({
                    incomplete:!state.contract,
                    disabled: false
                })
            } else {
                setSliderControl({
                    incomplete:!state.contract,
                    disabled: true
                })
            }

        }
    }, [state])

    return (
        <div className="int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox
                text={message.text} />
            <div className="toggler-wrapper">
                <div
                    className="toggle-wrapper-item">
                    <span className="label">Proposal: </span>
                    <ToggleButton
                        handleChange={(bool) => setState({ ...state, proposal: bool })} />
                </div>
                <div
                    className="toggle-wrapper-item">
                    <span className="label">Contract: </span>
                    <ToggleButton
                        handleChange={(bool) => setState({ ...state, contract: bool })} />
                </div>
            </div>
        </div>
    );
}

export default Interaction3;