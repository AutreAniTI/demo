import RatingSlider from "./RatingSlider";
const RadarChartLeft = () => {
    return (
        <div className="charts-left">
            <div
                className="charts-box">
                <p>Based on your results it looks like you would score pretty well with a total of 72 points.</p>
            </div>
            <div
                className="charts-box">
                <p> Based on your results it looks like you would score pretty well with a total of 72 points.</p>

            </div>
            <div
                className="charts-box">
                <p> How well do you think this agent would do?</p>
            </div>
        <RatingSlider />
        </div>
    );
}

export default RadarChartLeft;