import AccordionItem from "./AccordionItem";

const Accordion = ({arr}) => {
    const list = arr.map((elem, index) => (
        <AccordionItem
            summary={elem.summary}
            content={elem.content}
            key={index} />
    ));

    return (
        <div
            className="accordion">
            {list}
        </div>
    );
}

export default Accordion;