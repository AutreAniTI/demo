import MessageBox from "../../../components/MessageBox/MessageBox";

const Slider6 = ({
    mainState,
    updateMainState,
    handleNextClick
}) => {
    const handleSlide = () => {
        handleNextClick();
        updateMainState({
            ...mainState,
            count: mainState.count + 1
        })
    }

    const handleAnimationEnd = (e, bool) => {
        if (bool) {
            setTimeout(handleSlide, 6000)
        }
    }

    return (
        <div
            className="centered wait">
            <MessageBox
                text="Give me a few minutes and I'll connect you to Ti Services..." />
            <MessageBox
                handleAnimationEnd = {(e) => handleAnimationEnd(e, true)}
                className="delayed-5"
                text={`Unfortunately I'm only able to find the  <strong>${mainState.companyName} </strong> information we've scraped, not your  <strong>${mainState.companyEmail} METRICS FORECASTING</strong>`} />
        </div>
    );
}

export default Slider6;