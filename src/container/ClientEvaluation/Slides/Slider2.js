import MessageBox from "../../../components/MessageBox/MessageBox";
import Yes from '../../../assets/images/app/clientEval/yes.png';
import No from '../../../assets/images/app/clientEval/no.png';
import { useState } from "react";

const Slider2 = ({
    mainState,
    updateMainState,
    handleNextClick
}) => {
    const [state, setState] = useState();
    const [disappear, setDisappear] = useState();

    const handleSlide = () => {
        handleNextClick();
        updateMainState({
            evalCompleted: state,
            count: mainState.count + 1
        })
    }
    const handleAnimationEnd = (e, option) => {
        if (e.animationName === "fade-out") {
            setDisappear(option)
        } else if (e.animationName === "fade-in" &&
            option === "slide") {
            setTimeout(handleSlide, 3000);
        }
    }

    return (
        <div
            className="centered">
            <MessageBox
                text="Have you already completed your client evaluation ?" />
            {!disappear &&
                <div
                    className="images-wrapper">
                    <div
                        onClick={() => setState("Yes")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onAnimationEnd={(e) => handleAnimationEnd(e, "Yes")}
                        className="image-container yes">
                        <img
                            title="Yes"
                            src={Yes}
                            alt="Yes" />
                        <span>Yes</span>
                    </div>
                    <div
                        onAnimationEnd={(e) => handleAnimationEnd(e, "No")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onClick={() => setState("No")}
                        className="image-container no">
                        <img
                            title="No"
                            src={No}
                            alt="no" />
                        <span>No</span>
                    </div>
                </div>
            }
            {disappear &&
                <MessageBox
                    className="answer"
                    text={state} />
            }
            {disappear &&
                <MessageBox
                    handleAnimationEnd={(e) => handleAnimationEnd(e, "slide")}
                    className="delayed-1 "
                    title={true}
                    text="Great" />}
        </div>
    );
}

export default Slider2;