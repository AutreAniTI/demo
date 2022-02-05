import { useState, useEffect } from "react";
import Donut from "../Donut/Donut";
import { MENU_DATA } from './menuData';
import MenuItems from "./MenuItems";

const CircularMenuContainer = () => {
    const [active, setActive] = useState();
    const [borderWidth, setBorderWidth] = useState(10)
    useEffect(() => {
        let timerId
        if(active) {         
            let i = borderWidth;
            timerId = setInterval(() => i > 0 && setBorderWidth(i-=2), 100);
        }
        return () => clearInterval(timerId);
    },[active])
    console.log(borderWidth)
    return (
        <div
        style = {{width: borderWidth * 5 +"vw", height:borderWidth * 5 +"vw"}}
         className="circular-menu">
            <div
                className="circular-menu-wrapper">
                <Donut
                    borderWidth={borderWidth}
                    arr={MENU_DATA} />
                    {
                        !active &&
                        <MenuItems
                        updateActive = {(str) => setActive(str)}
                        arr={MENU_DATA} />
                    }
            </div>
        </div>
    );
}

export default CircularMenuContainer;