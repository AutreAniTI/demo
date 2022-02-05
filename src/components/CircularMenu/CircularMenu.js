import { useState, useEffect } from "react";
import Donut from "../Donut/Donut";
import { MENU_DATA } from './menuData';
import MenuItems from "./MenuItems";

const CircularMenuContainer = () => {
    const [active, setActive] = useState();
    const [borderWidth, setBorderWidth] = useState(12)
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


        // <div
        //     className={`circular-menu ${active ? "active" : ""}`}>

        //     <a className="floating-btn" onClick={() => setActive(!active)}>
        //         <i className="fa fa-bars"></i>
        //     </a>

        //     <menu className="items-wrapper">
        //         <a href="#" className="menu-item fa fa-home"></a>
        //         <a href="#" className="menu-item fa fa-user"></a>
        //         <a href="#" className="menu-item fa fa-pie-chart"></a>
        //         <a href="#" className="menu-item fa fa-cog"></a>
        //     </menu>
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