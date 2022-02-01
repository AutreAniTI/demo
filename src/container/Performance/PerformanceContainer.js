import BgImage from '../../assets/images/background/01.webp';
import TypingText from '../../components/TypingText/TypingText';

const PerformanceContainer = () => {
    const arr = ["faster", "safer", "simpler"]
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
                    <span>Make each</span> <br /> 
                    <span>interaction </span>
                <TypingText
                    arr={arr} />
                    </h3>
                <p>Combine advanced, digital technologies with the best people to deliver human understanding and empathy when it matters most.
                    <br />
                    <br />
                    <strong>#1 in next-generation business services</strong>
                </p>
            </div>
            </div>
        </div>
    );
}

export default PerformanceContainer;