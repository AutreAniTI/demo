import { useState } from "react";

const NavCircle = ({
    text,
    icon,
    className,
    updateAnimation,
}) => {
    const dashedText = text.split(" ").join("-");
    const [showtext, setShowText] = useState();

    const handleClick = () => {
        updateAnimation("zoom-"+ dashedText)
    }

    return (  
        <div
            onClick = {handleClick}
            onMouseEnter = {() => setShowText(true)}
            onMouseLeave = {() => setShowText(false)}
            className = {`nav-circle-wrapper nav-circle-${dashedText} ${className?
                                                        className : undefined}`}>
            <div
                className = "nav-circle">
                    {
                        showtext?
                        <span>{text}</span>
                        :
                        
                            icon?
                            <img 
                            src = {icon}
                            alt = {text}/>
                            :
                            <span>{text}</span>
                    }
                </div>
        </div>
    );
}
 
export default NavCircle;