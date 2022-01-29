import Button from "../Button/Button";
import NextIcon from '../../assets/icons/Icons/NextIcon';
import PrevIcon from '../../assets/icons/Icons/PrevIcon';
// import Question from "../QAContainer/Question/Question";
// import Exclamation from "../QAContainer/Question/Exclamation/Exclamation";
import ExclamationIcon from '../../assets/icons/Icons/ExclamationMIcon';
import QuestionIcon from '../../assets/icons/Icons/QuestionMIcon';
import QAContainer from "../QAContainer/QAContainer";


const SliderControl = ({
    arr,
    handlePrevClick,
    handleNextClick,
    state,
}) => {

    return (
        <div className="button-wrapper">
            <Button
                className="go-back-btn"
                children={<PrevIcon />}
                label="Go back"
                handleClick={handlePrevClick} />
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
                    ${state.disabled?
                     "button-disabled": undefined}
                     ${state.incomplete?
                    "button-incomplete": undefined}`}
                children={<NextIcon />}
                label="Continue"
                handleClick={handleNextClick} />
        </div>
    );
}

export default SliderControl;