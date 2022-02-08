import SSIUser from "./SSIUser/SSIUser";
import Industry from "./PeopleIndustry/Industry";
import Network from "./PeopleNetwork/Network";
const LinkedInSSI = () => {
    return (
        <div
            className="linkedIn-SSI page">
            <header />
            <div className = "content">
            <h2>Your Social Selling Index</h2>
            <SSIUser />
            <div className = "industry-network-wrapper">
            <Industry />
            <Network />
            </div>
            </div>
        </div>
    );
}

export default LinkedInSSI;