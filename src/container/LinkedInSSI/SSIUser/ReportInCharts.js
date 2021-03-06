import Circle from "./Circle";
import ProgressBar from '../ProgressBar';
import LinkedInQuestion from "../../../assets/icons/Icons/LinkedInQuestion";
import Modal from "../Modal";
import { SSI_DATA } from "./SSIdata";
import { useEffect, useState } from "react";
import Donut from "../../../components/Donut/Donut";

export const DATA_INNER = [
    {
        name: "Facebook",
        color: "66,103,178",
        percentage: .248
    },
    {
        name: "",
        color: "255,255,255",
        percentage: .002
    },
    {
        name: "LinkedIn",
        color: "40,103,178",
        percentage: .248
    },
    {
        name: "",
        color: "255,255,255",
        percentage: .002
    },
    {
        name: "Youtube",
        color: "205, 32, 31",
        percentage: .248
    },
    {
        name: "",
        color: "255,255,255",
        percentage: .002
    },
    {
        name: "Google",
        color: "244,180,0",
        percentage: .248
    },
    {
        name: "",
        color: "255,255,255",
        percentage: .002
    }
]

const ReportInCharts = () => {
    const [active, setActive] = useState();

    const handleClickOutside = (e) => {
        if (!e.target.closest('.question') ||
            !e.target.closest('.pop-up')) {
            setActive(null)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const updateActive = (value) => {
        setActive(value)
    }

    const list = SSI_DATA.map((data, index) => (
        data.id < 5 &&
        <ProgressBar
            key={index}
            id={data.id}
            color={data.color}
            score={data.score}
            title={data.title}
            active={active}
            updateActive={updateActive}
            popup={data.popup} />
    ))

    return (
        <section>
            <div
                className="report-box main-chart">
                <div className="left">
                    <div
                        className="title">
                        <p
                            className="report-category">
                            Current Channel Utilization
                        </p>

                        <div
                            onClick={() => {
                                updateActive(5)
                            }}
                            className={`question ${active === SSI_DATA[4].id ?
                                "active" : ""}`}>
                            <LinkedInQuestion />
                            {
                                active === SSI_DATA[4].id &&
                                <Modal
                                    className="pop-up-bottom"
                                    updateActive={updateActive}
                                    content={SSI_DATA[4].popup} />
                            }
                        </div>
                    </div>
                    <div
                        className="donut-wrapper">
                        <div
                            style={{ width: "200px", height: "200px" }}>
                            <Donut arr={DATA_INNER}
                                borderWidth="20px"
                            />
                        </div>
                        {/* <Circle /> */}
                        <div
                            className="donut-details">
                            <span>18</span> <br />
                            out of 100
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        Four components of your score</h4>
                    {list}
                </div>
            </div>
        </section>
    );
}

export default ReportInCharts;