import RadarChart from "../../components/Charts/RadarChart";
import TopBar from "./TopBar";
import RadarChartLeft from "./RadarChartLeft";
const RadarChartContainer = () => {
    return (
        <div className="charts">
            <div className="container">
                <TopBar />
                <div
                    className="chart-content">
                    <RadarChartLeft />
                    <div
                        className="charts-box radar-chart-box">
                        <RadarChart
                            size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadarChartContainer;