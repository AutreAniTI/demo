import Donut from "../../components/Donut/Donut";

const ChartsLeft = ({ DATA_INNER, DATA_OUTER}) => {

    const donutDetails = DATA_OUTER.map((elem, index) => (
        <div
            key={index}>
            <span
                className="color"
                style={{ backgroundColor: `rgb(${elem.color})` }} />
            <span className="percentage">
                {Math.round(elem.percentage * 100)}%
                </span>
            {elem.name}
        </div>))

    return (
        <div className="charts-left">
            <div className="charts-box chart-donut">
                <div className="donuts-wrapper">
                    <div
                        className="donut donut-outer">
                        <Donut
                            borderWidth="6"
                            arr={DATA_OUTER}
                        />
                    </div>
                    <div
                        className="donut donut-inner">
                        <Donut
                            borderWidth="4"
                            arr={DATA_INNER}
                        />
                    </div>
                </div>
                <div className="donut-details">

                    {donutDetails}
                </div>
            </div>
            <div
                className="charts-box text-wrapper">
                <p>Text</p>
            </div>
            <div
                className="charts-box calculations">
                <p>calculations</p>
            </div>
        </div>
    );
}

export default ChartsLeft;