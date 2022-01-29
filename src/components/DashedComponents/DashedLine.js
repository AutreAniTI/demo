const DashedLine = ({
    className
}) => {
    return (
        <svg
        className = {`dashed-line ${className}`}
         width="150" height="8" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <line strokeDasharray="10,10" x1="0" y1="3" x2="150" y2="3" />
        </svg>
    );
}

export default DashedLine;