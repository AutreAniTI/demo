const SlideElement = ({ 
    active, 
    index,
    width, 
    Elem ,
    setSliderControl
}) => {
    return (
        <div
            style={{ width }}
            className={`slider-elem 
            ${active? 
            "slider-elem-active": undefined}`}>
            <Elem 
            active = {active}
            index = {index}
            setSliderControl = {setSliderControl}/>
        </div>
    );
}

export default SlideElement;