const TypingText = ({ arr }) => {
    const list = arr.map((elem, index) => (
        <li
            key={index}>
            <span>
                {elem}
            </span>
        </li>
    ))
    return (
        <div className="typing-text">
            <ul className="dynamic-txts">
                {list}
            </ul>
        </div>)
        ;
}

export default TypingText;