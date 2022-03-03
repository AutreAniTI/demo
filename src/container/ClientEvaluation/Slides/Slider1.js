import { useEffect } from "react";
import Logo from "../../../assets/images/companyRelated/ti_logo_animation.gif";

const Slider1 = ({ handleNextClick }) => {
    useEffect(() => {
        setTimeout(handleNextClick, 5000);
    }, [])
    
    return (
        <div
            className="welcome centered">
            <h1>
                Welcome
            </h1>
            <img
                src={Logo}
                alt="logo"
                className="welcome-logo" />

        </div>
    );
}

export default Slider1;