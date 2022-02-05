import { useRef, useEffect, useState } from "react";

const RatingSlider = () => {
    const [left, setLeft] = useState(10)
    const thumb = useRef();
    const slider = useRef();

    const handleMouseDown = (event) => {
        event.preventDefault();

        let shiftX = event.clientX - thumb.current.getBoundingClientRect().left;
        console.log(shiftX)

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.current.getBoundingClientRect().left;

            if (newLeft < 10) {
                newLeft = 10;
            }
            let rightEdge = slider.current.offsetWidth - thumb.current.offsetWidth - 10;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            setLeft(newLeft)
        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

    };


    return (
        <div
            ref={slider}
            className="rating-slider">
            <div
                style={{ left: left + "px" }}
                onDragStart={() => false}
                onMouseDown={handleMouseDown}
                ref={thumb}
                className="thumb" />
        </div>
    );
}

export default RatingSlider;