import LogoImg from '../../assets/images/companyRelated/ti_logo_animation.gif';

const Logo = ({
    className
}) => {
    return (
        <div
            style = {{backgroundImage: `url(${LogoImg})`, backgroundRepeat: "no-repeat"}}
            className={`logo ${className}`}>
        </div>
    );
}

export default Logo;