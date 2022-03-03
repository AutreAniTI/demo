import MessageBox from "../../../components/MessageBox/MessageBox";
import Saving from '../../../assets/images/app/clientEval/saving.png';
import Profit from '../../../assets/images/app/clientEval/profit.png';
import Revenue from '../../../assets/images/app/clientEval/revenue.png';
import Service from '../../../assets/images/app/clientEval/service.png';
import { useState } from "react";

const Slider7 = ({
    mainState,
    updateMainState,
    // handleNextClick
}) => {
    const [state, setState] = useState();
    const [disappear, setDisappear] = useState();

    const handleSlide = () => {
        // handleNextClick();
        updateMainState({
            ...mainState,
            interest: state,
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
                text="What are you most interested in? " />
            {!disappear &&
                <div
                    className="images-wrapper">
                    <div
                        onAnimationEnd={(e) => handleAnimationEnd(e, "yes")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onClick={() => setState("Saving Money")}
                        className="image-container">
                        <img
                            src={Saving}
                            alt="saving" />
                        <span>Saving Money</span>
                    </div>
                    <div
                        onAnimationEnd={(e) => handleAnimationEnd(e, "no")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onClick={() => setState("Increased Revenue")}
                        className="image-container">
                        <img
                            src={Revenue}
                            alt="revenue" />
                        <span>Increased Revenue</span>
                    </div>
                    <div
                        onAnimationEnd={(e) => handleAnimationEnd(e, "no")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onClick={() => setState("Increasing  Profits")}
                        className="image-container">
                        <img
                            src={Profit}
                            alt="profits" />
                        <span>Increasing  Profits</span>
                    </div>
                    <div
                        onAnimationEnd={(e) => handleAnimationEnd(e, "no")}
                        style={{ animationName: state ? "fade-out" : "" }}
                        onClick={() => setState("Providing better service")}
                        className="image-container">
                        <img

                            src={Service}
                            alt="service" />
                        <span>Providing better service</span>
                    </div>
                </div>
            }
            {disappear &&
                <MessageBox
                    className="answer"
                    text={state} />
            }
        </div>
    );
}

export default Slider7;