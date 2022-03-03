import MessageBox from "../../../components/MessageBox/MessageBox";
import { useState, useEffect } from "react";
import SingleInputForm from "../../../components/Forms/SingleInputForm";

const Slider3 = ({
    handleNextClick, 
    updateMainState, 
    mainState
}) => {
    const [state, setState] = useState();
    const [disappear, setDisappear] = useState();

    useEffect(() => {
        if (state) {
            setDisappear(true)
        }
    }, [state])

    const handleSlide = () => {
        handleNextClick();
        updateMainState({   
            ...mainState, 
            companyName: state,
            count:mainState.count + 1})
    }
  

    const handleAnimationEnd = (e, bool) => {
        if (e.animationName !== "fade-in" || !bool) return;
        setTimeout(handleSlide, 2000)
    }

    return (
        <div
            className="centered ask-for-name">
            <MessageBox
                text="What is the name of the company you asked us to test?                " />
            {
                disappear ?
                    <MessageBox
                        handleAnimationEnd = {(e) => handleAnimationEnd(e, true)}
                        text={state}
                        className="answer" />
                    :
                    <SingleInputForm
                        className = "delayed-2"
                        style={{ animationName: state ? "fade-out" : "" }}
                        updateValue={(value) => setState(value)}
                        placeholder="Enter company name" />
            }
        </div>
    );
}

export default Slider3;