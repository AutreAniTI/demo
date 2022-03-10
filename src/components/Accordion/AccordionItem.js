import { useState } from "react";
import Chevron from "../../assets/icons/Icons/Chevron";

const AccordionItem = ({
    summary,
    content
}) => {
    const [open, setIsOpen] = useState();
console.log(summary)
    return (
        <div
            className={`accordion-item ${open? 
            "accordion-item-open": undefined}`}>
            <div 
                className="accordion-summary"
                onClick={() => setIsOpen(!open)}>
            <p
                dangerouslySetInnerHTML ={{__html:summary}}
              >    
            </p>
            <Chevron
                    className={open ?
                        "chevron-open" : undefined}
            />
            </div>
        
            {
                open &&
                <p
                dangerouslySetInnerHTML ={{__html:content}}
                    className="accordion-content">
                
                </p>
            }

        </div>);
}

export default AccordionItem;