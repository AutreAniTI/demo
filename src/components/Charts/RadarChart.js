import Chart from 'chart.js/auto';
// import { Radar } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';


const data = {
    labels: [
        'Planning',
        'Problem Solving',
        'Ingenuity',
        'Goal orientation',
        'Self-reflection',
        'Endurance & capacity',
        'Speed',
        "Efficency",
        "Attention to details",
        "Planning"
    ],
    datasets: [{
        label: "",
        data: [28, 48, 40, 19, 96, 27, 100, 20, 12, 100],
        fill:false,
        // fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235,0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        borderWidth: "1px",
        
    }],
};

const RadarChart = ({size}) => {
    const ref = useRef();

    useEffect(() => {
        const myChartRef = ref.current.getContext("2d");

        new Chart(myChartRef, {
            type: "radar",
            data: data,
            options: {
                elements: {
                    line: {
                        borderColor: "red",
                        borderJoinStyle: "round"
                    }
                }
            }
           
        })

    }, [])

    return (
            <canvas
                ref={ref}
                style={{ width: "100%", height: "100%" }}
            />
            // {/* <Radar
            //     options={{
            //         elements: {
            //             line: {
            //                 borderWidth: 3,
            //                 borderJoinStyle: "round"
            //             }
            //         }
            //     }}
            //     borderColor="red"
            //     borderJoinStyle="round"
            //     data={data} /> */}
    )
}

export default RadarChart;