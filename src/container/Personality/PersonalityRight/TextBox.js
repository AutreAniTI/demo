const TextBox = ({
    text,
    arr,
    updateArr,
}) => {
    const handleClick = () => {
        let index = arr.findIndex(elem => elem === text);
        if(index === -1)  {
            updateArr(
                [
                    ...arr,
                    text
                ]
            )
        }else {
            let sliced = arr.slice(0, index, index + 1, arr.length);
            updateArr(sliced);
        }
    }
    return ( 
        <div
            onClick = {handleClick}
            className = {`text-box ${arr.includes(text)? "selected": ""}`}>
            {text}
        </div>
     );
}
 
export default TextBox;