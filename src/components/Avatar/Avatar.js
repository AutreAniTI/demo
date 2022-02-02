import Placeholder from '../../assets/images/app/user.png'

const Avatar = ({
    image,
    className,
    size,
}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${image || Placeholder})`,
                minWidth: size + "px",
                minHeight: size + "px",
            }}
            className={`avatar ${className}`} />
    );
}

export default Avatar;