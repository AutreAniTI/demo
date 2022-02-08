import LinkedInQuestion from '../../assets/icons/Icons/LinkedInQuestion';
import Modal from './Modal';

const ProgressBar = ({
    color,
    score,
    title,
    popup,
    active,
    updateActive,
    id,
}) => {
    return (
        <div
            className="progress-bar-wrapper">
            <div
                className="bar-outer">
                <div
                    style={{
                        width: (score * 100) / 25 + "%",
                        backgroundColor: color
                    }}
                    className="bar-inner" />
            </div>
            <div
                className="bar-details">
                <span> {score}</span>
                {title}
                <div
                    onClick={() => {
                        updateActive(id)
                    }}
                    className={`question ${active === id ?
                        "active" : ""}`}>
                    <LinkedInQuestion />
                    {
                        active &&
                        active === id &&
                        <Modal
                            title={title}
                            content={popup}
                            updateActive={updateActive} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;