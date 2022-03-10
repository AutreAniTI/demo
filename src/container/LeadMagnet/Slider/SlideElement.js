const SlideElement = ({
    active,
    index,
    width,
    Elem,
    setSliderControl,
    mainState,
    updateMainState,
    handleNextClick,
    handlePrevClick,
    actionBefore,
    actionBegin,
    actionFinished,
}) => {
    return (
        <div
            style={{ width }}
            className={`slider-elem 
            ${active ?
                    "slider-elem-active" : undefined}`}>
            <Elem
                handleNextClick = {handleNextClick}
                handlePrevClick = {handlePrevClick}
                mainState={mainState}
                updateMainState={updateMainState}
                active={active}
                index={index}
                actionBefore = {actionBefore}
                actionBegin = {actionBegin}
                actionFinished = {actionFinished}
                setSliderControl={setSliderControl} />
        </div>
    );
}

export default SlideElement;