import SSIUser from "./SSIUser/SSIUser";
import Industry from "./PeopleIndustry/Industry";
import Network from "./PeopleNetwork/Network";
import { Link } from "react-router-dom";
import { CALENDLY } from "../../constants/routes";

const LinkedInSSI = () => {
    return (
        <div
            className="linkedIn-SSI page">
            <header />
            <div className="content">
                <h2>Channel Management</h2>
                <SSIUser />

                <div className="industry-network-wrapper">

                    <Industry />
                    <Network />
                </div>
            </div>
            <Link to={CALENDLY}>
                <div
                    className="next-btn">
                    Next
                </div>
            </Link>
        </div>
    );
}

export default LinkedInSSI;