import Image from '../../assets/images/app/personality/coverImage.png'
import PersonalityRight from './PersonalityRight/PersonalityRight';
const PersonalityContainer = () => {
    return (
        <div
            className="personality">
            <div className="container">
                <div
                    className="left">
                    <img
                        src={Image}
                        alt="img" />
                </div>
                <PersonalityRight />
            </div>
        </div>
    );
}

export default PersonalityContainer;