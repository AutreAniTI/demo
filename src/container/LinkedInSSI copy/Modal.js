import LinkedInClose from '../../assets/icons/Icons/LinkedInClose';

const Modal = ({
    title,
    content,
    updateActive,
    className
}) => {
    return (
        <div className={`pop-up ${className}`}>
            <div className="pop-up-wrapper">
                <div
                    className="close"
                    onClick={(e) => {
                        e.stopPropagation();
                        updateActive(false)
                    }}>
                    <LinkedInClose />
                </div>
                {
                    title &&
                    <p
                        className="title">
                        {title}
                    </p>
                }
                <p
                    className="pop-up-content">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Modal;