import MessageBox from "../../../components/MessageBox/MessageBox";
import Yes from '../../../assets/images/app/yes.png';
import No from '../../../assets/images/app/no.png'
import { useState, useEffect } from "react";

const Slider2 = ({ mainState, updateMainState, handleNextClick }) => {

    const [state, setState] = useState();
    const [disappear, setDisappear] = useState();

    const handleSlide = () => {
        handleNextClick();
        updateMainState({    
            evalCompleted: state,
            count:mainState.count + 1})
    }

    useEffect(() => {
        if (state && disappear) {
            if (!mainState || !mainState?.evalCompleted ) {
                setTimeout(handleSlide, 2000);
            }
        }
    }, [state, disappear]);

    const handleAnimationEnd = (e, option) => {
        if (e.animationName !== "fade-out") return;
        setDisappear(option)
    }

    return (
        <div
            className = "centered">
            <MessageBox
                text="Have you already completed your client evaluation ?" />
            <div
                className="yes-no-wrapper">
                {
                    disappear !== "yes" &&
                    <img
                        onAnimationEnd={(e) => handleAnimationEnd(e, "yes")}
                        style={{ animationName: state === "no" ? "fade-out" : "" }}
                        onClick={() => setState("yes")}
                        className="yes"
                        src={Yes}
                        alt="yes" />
                }
                {disappear !== "no" &&
                    <img
                        onAnimationEnd={(e) => handleAnimationEnd(e, "no")}
                        style={{ animationName: state === "yes" ? "fade-out" : "" }}
                        onClick={() => setState("no")}
                        className="no"
                        src={No}
                        alt="no" />
                }
            </div>
        </div>
    );
}

export default Slider2;