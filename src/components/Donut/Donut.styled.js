import styled from "styled-components";


export const DonutContainer = styled.div`
    border-radius: 50%;
    height: var(--donut-size);
    margin: 40px;
    position: relative;
    width: var(--donut-size);
    box-sizing: border-box;
    width :100%;
    height:100%;
    margin:0;
`

export const DonutSlices = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: absolute;
    --checkStart: max(calc(${props => props.start} - .5), 0);
    -webkit-clip-path: inset(0 calc(50% * (var(--checkStart) / var(--checkStart))) 0 0);
    clip-path: inset(0 calc(50% * (var(--checkStart) / var(--checkStart))) 0 0);
    &:after {
        box-sizing: border-box;
        border: ${props => props.width} solid rgba(0, 0, 0, 0);
        border-radius: 50%;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: rotate(45deg);
        width: 100%;
        
    }   
    &:after {
        border-top-color:${props => `rgb(${props.color})`};
        border-right-color: rgba(${props => props.color}, calc(100 * (${props => props.percentage} - .25)));
        border-bottom-color: rgba(${props => props.color}, calc(100 * (${props => props.percentage}  - .5)));
        border-left-color: rgba(${props => props.color}, calc(100 * (${props => props.percentage}  - .75)));
        transform: rotate(calc(360deg * ${props => props.start} + 45deg ));
    } 
`