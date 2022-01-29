const MessageBox = ({
    title,
    text,
    className
}) => {
    return ( 
        <div 
        className = {`message-box ${className} ${title? "title-box": undefined}`}>
            <p dangerouslySetInnerHTML={{__html: text}}/>
        </div>
     );
}
 
export default MessageBox;