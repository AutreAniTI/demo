import { DonutContainer, DonutSlices } from "./Donut.styled"

const Donut = ({
    borderWidth,
    className,
    arr,
}) => {
    arr.sort((a, b) => a.percentage > b.percentage);

    const calcStart = (elemIndex) => {
        if(elemIndex === 0){
            return 0;
        }else{
            let sum = 0;
            for(let i = 0; i < elemIndex; i ++){
                sum += arr[i].percentage
            }
            return sum;
        }
    }   

    const slices = arr.map((item, index) => (
        <DonutSlices
            percentage = {item.percentage}
            color = {item.color}
            key = {index}
            start = {calcStart(index)}
            width = {borderWidth}
            index = {index}
             />
    ))
    return (
        <DonutContainer
            className = {className}>
            {slices}
        </DonutContainer>
        
    );
}

export default Donut;