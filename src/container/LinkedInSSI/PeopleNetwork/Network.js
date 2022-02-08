import ReportInCharts from "./ReportInCharts";

const Network = () => {
    return (
        <div
            className="report-box">
            <p
                className="report-category">
                People in you network
            </p>
            <div className="report-inner">
                <ReportInCharts />
                <hr />
                <div
                    className="details-text">
                    <p>People in your network have an
                        <strong>  average SSI of 38.</strong>
                    </p>
                    <p>You rank in the <strong>top 80%</strong></p>
                    <p
                    className = "up"><span>
                        Up 1%
                    </span> since last week</p>
                </div>
            </div>
        </div>
    );
}

export default Network;