import { useState } from 'react';
import RadioInput from '../../../../components/Inputs/RadioInput';
import MessageBox from "../../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";
import { useEffect } from 'react';
import {LINKEDIN_SSI} from '../../../../constants/routes';
import { Link } from 'react-router-dom';
const arr = ["Customer wants to learn more","I'm not interested"]

const Interaction4 = ({index, actionBefore, actionBegin,setSliderControl, active}) => {
    const [state, setState] = useState();
    const [showPopup, setShowPopup] = useState();
    const message = MESSAGES[index];
    useEffect(() => {
        if (active && !actionBefore) {
            setSliderControl({
                actionBefore: true,
            })
        }
    }, [active]);

    useEffect(() => {
        if(actionBegin) {
            setShowPopup(true)
        }
    },[actionBegin]);

    const closePopup = () => {
        setSliderControl({
            actionFinished:true
        })
        setShowPopup(false)
    }

    return (
        <div className = "int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox 
                text={message.text} />
            <div className = "wrapper">
            <RadioInput
                options = {arr}
                updateChecked ={(value) => setState(value)}
                 />
                 {
                     showPopup && 
                     <div className = "pop-up">
                     <div className = "pop-up-inner">
                         <p>DO YOU WANT INFO ON LINKEDIN CHANNEL MANAGEMENT?</p>
                         <Link to = {LINKEDIN_SSI}>
                         <span className = "go-btn">Go</span>
                         </Link>
                         <span
                            onClick = {closePopup}
                          className = "close-btn">x</span>
                     </div>
                 </div>
                 }
            </div>
        </div>
    );
}

export default Interaction4;