import MessageBox from "../../../components/MessageBox/MessageBox";
import { useState, useEffect } from "react";
import SingleInputForm from "../../../components/Forms/SingleInputForm";

const Slider4 = ({ mainState, updateMainState, handleNextClick }) => {
    const [state, setState] = useState();
    const [disappear, setDisappear] = useState()

    useEffect(() => {
        if (state) {
            setDisappear(true)
        }
    }, [state])

    const handleSlide = () => {
        handleNextClick();
        updateMainState({    
            ...mainState, 
            companyEmail: state,
            count:mainState.count + 1})
    }


    const handleAnimationEnd = (e) => {
        if (e.animationName !== "fade-in") return;
        setTimeout(handleSlide, 2000)
    }

    return (
        <div
            className="centered ask-for-name">
            <MessageBox
                className = "delayed-1"
                text={`Unfortunately I'm not finding your <strong>interaction forecasting & ${mainState.companyName} needs assessment.</strong>`} />
            <MessageBox
                className = "delayed-2"
                text="What email did we send your <strong>PERFORMANCE GUARANTEE</strong> to?" />
            {
                disappear ?
                    <MessageBox
                        handleAnimationEnd={handleAnimationEnd}
                        text={state}
                        className="answer" />
                    :
                    <SingleInputForm
                        className = "delayed-3"
                        style={{ animationName: state ? "fade-out" : "" }}
                        updateValue={(value) => setState(value)}
                        placeholder="Enter company name" />
            }

        </div>
    );
}

export default Slider4;