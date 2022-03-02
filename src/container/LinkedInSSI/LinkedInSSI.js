import SSIUser from "./SSIUser/SSIUser";
import Industry from "./PeopleIndustry/Industry";
import Network from "./PeopleNetwork/Network";
import Donut from '../../components/Donut/Donut';

export const DATA_INNER = [
    {
        name: "Interactions",
        color: "6, 214, 160",
        percentage: .4896
    },
    {
        name: "Activity",
        color: "255, 209, 102",
        percentage: .0831
    },
    {
        name: "Staffing",
        color: "142, 202, 230",
        percentage: .006
    },
    {
        name: "Performance",
        color: "17, 138, 178",
        percentage: .005
    },
    {
        name: "Results",
        color: "239, 71, 111",
        percentage: .4163
    }
]
const LinkedInSSI = () => {
    return (
        <div
            className="linkedIn-SSI page">
            <header />
            <div className="content">
                <h2>Your Social Selling Index</h2>
                <SSIUser />
                <div
                    style={{ width: "300px", height: "300px" }}>
                    <Donut arr={DATA_INNER}
                        borderWidth="20px"
                    />
                </div>
                <div className="industry-network-wrapper">

                    <Industry />
                    <Network />
                </div>
            </div>
        </div>
    );
}

export default LinkedInSSI;