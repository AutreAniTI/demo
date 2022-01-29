const ShadowedWrapper = ({
    className,
    children,
    forIcon,
}) => {
    return ( 
        <div
        className = {`${className}
                ${forIcon? 
                "shdw-icon-wrapper": undefined}`}>
            {children}
        </div>
     );
}
 
export default ShadowedWrapper;