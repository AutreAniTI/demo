import Donut from "../../components/Donut/Donut";
import Button from '../../components/Button/Button';

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
                            borderWidth="60px"
                            arr={DATA_OUTER}
                        />
                    </div>
                    <div
                        className="donut donut-inner">
                        <Donut
                            borderWidth="40px"
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
            <Button
                label = "Calculate"/>
            {/* <div
                className="charts-box calculations">
                <span>calculations</p>
            </div> */}
        </div>
    );
}

export default ChartsLeft;