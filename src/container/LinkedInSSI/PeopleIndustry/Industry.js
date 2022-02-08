import ReportInCharts from "./ReportInCharts";

const Industry = () => {
    return (
        <div
            className="report-box">
            <p
                className="report-category">
                People in you industry
            </p>
            <div className="report-inner">
                <ReportInCharts />
                <hr />
                <div
                    className="details-text">
                    <p>Sales professionals in the Hospitality industry have an
                        <strong> average SSI of 22.</strong>
                    </p>
                    <p>You rank in the <strong>top 49%</strong></p>
                    <p
                    className = "up"><span>
                        Up 1%
                    </span> since last week</p>
                </div>
            </div>
        </div>
    );
}

export default Industry;