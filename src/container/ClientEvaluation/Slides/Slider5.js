import MessageBox from "../../../components/MessageBox/MessageBox";
import { useState, useEffect } from "react";
import SingleInputForm from "../../../components/Forms/SingleInputForm";

const Slider5 = ({ mainState }) => {
    // const [state, setState] = useState();
    // const [disappear, setDisappear] = useState()
    // useEffect(() => {
    //     if (state) {
    //         setDisappear(true)
    //     }
    // }, [state])
    // console.log(state, "state")


    // const handleAnimationEnd = (e) => {
    //     console.log(e.animationName)
    //     if (e.animationName !== "fade-in") return;
    //     updateMainState({ companyEmail: state })
    //     setTimeout(handleNextClick, 2000)
    // }

    return (
        <div
            className="centered wait">
            <MessageBox
                text="Thanks"/>
            <MessageBox
                className = "delayed-1"
                text={`I'll check to see why our records aren't listing ${mainState.companyEmail} after we're finished...` }/>
            <MessageBox
                className = "delayed-2"
                text="Wait ..."/>
            <MessageBox
                className = "delayed-3"
                text="I'm still looking ..."/>
        </div>
    );
}

export default Slider5;