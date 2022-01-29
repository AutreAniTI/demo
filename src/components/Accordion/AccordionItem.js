import { useState } from "react";
import Chevron from "../../assets/icons/Icons/Chevron";

const AccordionItem = ({
    summary,
    content
}) => {
    const [open, setIsOpen] = useState();

    return (
        <div
            className={`accordion-item ${open? 
            "accordion-item-open": undefined}`}>
            <p
                onClick={() => setIsOpen(!open)}
                className="accordion-summary">
                {summary}
                <Chevron
                    className={open ?
                        "chevron-open" : undefined}
                />
            </p>
            {
                open &&
                <p
                    className="accordion-content">
                    {content}
                </p>
            }

        </div>);
}

export default AccordionItem;