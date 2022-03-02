const MessageBox = ({
    title,
    text,
    className,
    handleAnimationEnd
}) => {
    return ( 
        <div 
        onAnimationEnd = {(e) => {if(handleAnimationEnd) handleAnimationEnd(e)}}
        className = {`message-box ${className} ${title? "title-box": undefined}`}>
            <p dangerouslySetInnerHTML={{__html: text}}/>
        </div>
     );
}
 
export default MessageBox;