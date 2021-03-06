import MessageBox from "../../../components/MessageBox/MessageBox";

const Slider5 = ({
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
            setTimeout(handleSlide, 2000)
        }
    }

    return (
        <div
            className="centered wait">
            <MessageBox
                text="Thanks" />
            <MessageBox
                className="delayed-1"
                text={`I'll check to see why our records aren't listing <strong>${mainState.companyEmail}</strong> after we're finished...`} />
            <MessageBox
                className="delayed-4"
                text="Wait ..." />
            <MessageBox
                handleAnimationEnd={(e) => handleAnimationEnd(e, true)}
                className="delayed-5"
                text="I'm still looking ..." />
        </div>
    );
}

export default Slider5;