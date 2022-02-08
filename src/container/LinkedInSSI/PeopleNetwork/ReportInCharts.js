import IndustryDonut from "./NetworkDonut";

const ReportInCharts = () => {
    return (  
        <div
        className="donut-wrapper">
        <IndustryDonut />
        <div
            className="donut-details">
            <span>38</span> <br />
            out of 100
        </div>
    </div>
    );
}
 
export default ReportInCharts;