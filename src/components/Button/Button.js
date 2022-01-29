const Button = ({
    className,
    handleClick,
    label,
    children
}) => {
    return (
        <button
            onClick = {handleClick}
            className={`button-main ${className}`}>
            {label}
            {children}
        </button>
    );
}

export default Button;