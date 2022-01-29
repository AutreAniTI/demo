import Logo from "../Logo/Logo";
import OutGoing from '../../assets/icons/IconImages/outgoing.png';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <Logo />
                <div className = "call-icon-wrapper">
                    <div
                        style={{ backgroundImage: `url(${OutGoing})` }}
                        className="call-icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;