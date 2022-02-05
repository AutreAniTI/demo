const TopBar = () => {
    const arr = [
        {
            text1: "text1",
            text2: "text2",
            perc1: 80,
            perc2: 20,
        },
        {
            text1: "text1",
            text2: "text2",
            perc1: 50,
            perc2: 50,
        },
        {
            text1: "text1",
            text2: "text2",
            perc1: 70,
            perc2: 30,
        }
    ]
    const list = arr.map((elem, index) => (
        <div
            className="bar"
            key={index}>
            <div className="title-wrapper">
                <span>{elem.text1}</span>
                <span>{elem.text2}</span>
            </div>
            <div
                className="bar-wrapper">
                <div
                style = {{backgroundImage:`linear-gradient(90deg, #BDB2FF ${elem.perc1}%, #A0C4FF ${elem.perc2}%)`}}
                 />
            </div>
        </div>
    ))
    return (
        <div className="charts-box top-bar">
            {list}
        </div>
    );
}

export default TopBar;





