import Button from "../../../components/Button/Button";
import NextIcon from '../../../assets/icons/Icons/NextIcon';
import PrevIcon from '../../../assets/icons/Icons/PrevIcon';
import ExclamationIcon from '../../../assets/icons/Icons/ExclamationMIcon';
import QuestionIcon from '../../../assets/icons/Icons/QuestionMIcon';
import QAContainer from "../../../components/QAContainer/QAContainer";
import { useEffect, useState } from "react";

const SliderControl = ({
    arr,
    handlePrevClick,
    handleNextClick,
    state,
    updateState,
}) => {
    const [showPopup, setShowPopup] = useState();
    const [showGoBack, setShowGoBack] = useState(true);
    const handleGoBack = () => {
        if (state && state.active === 1) {
            setShowPopup(true)
        } else {
            handlePrevClick()
        }
    }

    const handleContinue = () => {
        if(state.actionBegin && !state.actionFinished) return;
        if(state.actionBefore === true && !state.actionBegin) {
            updateState({
                ...state,
                actionBegin:true
            })
            return;
        }else {
            handleNextClick()
        }
    }
    const handleAnimationEnd = (e) => {
        if (e.animationName === "fade-out") {
            setShowPopup(false);
            setShowGoBack(false);
        }
    }

    useEffect(() => {
        if(state.active !==1) {
            setShowGoBack(true)
        }
    },[state])

    return (
        <div className="button-wrapper">
            <Button
                className={`go-back-btn ${!showGoBack ? "btn-hide" : ""}`}
                children={<PrevIcon />}
                label="Go back"
                handleClick={handleGoBack} />

            {
                showPopup &&
                <div
                    onAnimationEnd={handleAnimationEnd}
                    className="prevent-go-back">
                    It's a problem if you need to go backwards
                </div>
            }
            <div className="question-exclamation-wrapper">
                {
                    arr &&
                    <>
                        {
                            arr.exclam &&
                            <QAContainer
                                arr={arr.exclam}
                                className="qa-container-left"
                                Icon={ExclamationIcon} />
                        }
                        {
                            arr.question &&
                            <QAContainer
                                arr={arr.question}
                                className="qa-container-right"
                                Icon={QuestionIcon} />
                        }
                    </>
                }
            </div>
            <Button
                className={`continue-btn 
                    ${state.disabled ?
                        "button-disabled" : undefined}
                     ${state.incomplete ?
                        "button-incomplete" : undefined}`}
                children={<NextIcon />}
                label="Continue"
                handleClick={handleContinue} />
        </div>
    );
}

export default SliderControl;