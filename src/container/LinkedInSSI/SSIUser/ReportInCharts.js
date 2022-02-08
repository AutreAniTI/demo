import Circle from "./Circle";
import ProgressBar from '../ProgressBar';
import LinkedInQuestion from "../../../assets/icons/Icons/LinkedInQuestion";
import Modal from "../Modal";
import { SSI_DATA } from "./SSIdata";
import { useEffect, useState } from "react";
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
                className="report-box">
                <div className="left">
                    <div
                        className="title">
                        <p
                            className="report-category">
                            Current Social Selling Index
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
                        <Circle />
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