const SlideElement = ({ 
    active, 
    index,
    width, 
    Elem ,
    setDisabled,
    setIncomplete
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
            setIncomplete = {setIncomplete}
            setDisabled = {setDisabled}/>
        </div>
    );
}

export default SlideElement;