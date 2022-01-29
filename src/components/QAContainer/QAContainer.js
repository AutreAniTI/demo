import { useRef, useState, useEffect } from 'react';
import Accordion from '../Accordion/Accordion';

const QAContainer = ({
    arr,
    Icon,
    className
}) => {
    const [showBox, setShowBox] = useState();
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowBox(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div
            className={`qa-container ${className}`}
            ref={ref}
            onClick={() => setShowBox(true)}>
            {
                showBox &&
                <div
                    className="box-content-wrapper">
                        <Accordion
                        arr = {arr}/>
                </div>
            }
            <Icon />
        </div>
    );
}

export default QAContainer;