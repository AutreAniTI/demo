import BgImage from '../../assets/images/background/01.webp';
import TypingText from '../../components/TypingText/TypingText';
import {LEAD_MAGNET_OPTIONS} from '../../constants/routes';
import { Link } from 'react-router-dom';

const PerformanceContainer = () => {
    const arr = ["clients", "customers", "teams", "communities"];
    return (
        <div
            className="performance">
                <div className = "performance-inner container">
            <div
                className = "bg-image"
                style = {{backgroundImage: `url(${BgImage}`}}
                />
            <div
                className="text-wrapper">
                <p><b>Engage customers</b></p>
                <h3>
                    <span>We're proving </span> <br /> 
                    <span>happier people create happier </span>
                <TypingText
                    arr={arr} />
                    </h3>
                <p>Combine advanced, digital technologies with the best people to deliver human understanding and empathy when it matters most.
                    <Link
                    to = {LEAD_MAGNET_OPTIONS}>
                   <div
                    className = "continue-btn">
                       Continue
                    </div>
                    </Link>
                   
                    {/* <br />
                    <br /> */}
                    {/* <strong>#1 in next-generation business services</strong> */}
                </p>
            </div>
            </div>
        </div>
    );
}

export default PerformanceContainer;