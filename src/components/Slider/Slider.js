import { useEffect, useRef, useState } from "react";
import SlideElement from "./SlideElement";
import SliderControl from "./SliderControl";

const Slider = ({
    mainState,
    updateMainState,
    controller,
    components,
    autoplay,
    componentControl
}) => {
    const [width, setWidth] = useState()
    const outerSlider = useRef();
    const [state, setState] = useState({
        active: 1,
        left: 0,
        disabled: false,
        incomplete: false,
    })
    useEffect(() => {
        let timerId;
        if (autoplay) {
            timerId = setInterval(handleNextClick, 5000)
        }
        return clearInterval(timerId);
    }, [])

    useEffect(() => {
        if (outerSlider.current)
            setWidth(outerSlider.current.offsetWidth)
    }, [outerSlider.current])

    const handlePrevClick = () => {
        if (state.active !== 1) {
            setState({
                left: state.left + width,
                active: state.active - 1
            })
        }
    }
    const handleNextClick = () => {
        // if (state.active !== components.length) {
            setState({
                left: +state.left - +width,
                active: state.active + 1,
            })
        // }
    }
    const innerSlider = components.map((elem, index) => (
        <SlideElement
            handleNextClick = {handleNextClick}
            handlePrevClick = {handlePrevClick}
            mainState={mainState}
            updateMainState={updateMainState}
            setSliderControl={(obj) => setState({
                ...state,
                ...obj
            })}
            index={index}
            active={(state.active - 1) === index}
            key={index}
            Elem={elem}
            width={width}
        />
    ))


    return (
        <div
            ref={outerSlider}
            className="slider-wrapper">
            <div
                style={{ transform: `translateX(${state.left}px)` }}
                className="slider">
                {
                    outerSlider?.current && 
                    innerSlider
                }
            </div>
            {
                !autoplay &&
                !componentControl &&
                <SliderControl
                    arr={controller?.[state.active - 1]}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                    state={state} />
            }
        </div>
    );
}

export default Slider;
