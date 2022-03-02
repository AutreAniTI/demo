const SlideElement = ({
    active,
    index,
    width,
    Elem,
    setSliderControl,
    mainState,
    updateMainState,
    handleNextClick,
    handlePrevClick 
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
                setSliderControl={setSliderControl} />
        </div>
    );
}

export default SlideElement;