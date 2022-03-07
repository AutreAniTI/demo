import Logo from '../../assets/images/companyRelated/ti_logo_animation.gif';
import { Link } from 'react-router-dom';
import { PERFORMANCE } from '../../constants/routes';

const WelcomeTi = () => {
    return (
        <div
            className="welcome-ti">
            <div
                className="container">
                <h1>
                    Welcome
                </h1>
                <img
                    src={Logo}
                    alt="logo"
                    className="welcome-logo" />
            
            <Link to= {PERFORMANCE}>
                <div
                    className="start">
                        Get Started
                    </div>
            </Link>
            </div>
        </div>
    );
}

export default WelcomeTi;