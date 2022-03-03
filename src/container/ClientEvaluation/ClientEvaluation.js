import { useState, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Slider1 from './Slides/Slider1';
import Slider2 from './Slides/Slider2';
import Slider3 from './Slides/Slider3';
import Slider3_1 from "./Slides/Slider3.1";
import Slider4 from './Slides/Slider4';
import Slider5 from "./Slides/Slider5";
import Slider6 from "./Slides/Slider6";
import Slider7 from "./Slides/Slider7";

const ClientEvaluation = () => {
    const [state, setState] = useState({ count: 2 });
    const [components, setComponents] = useState([Slider1, Slider2]);


    useEffect(() => {
        if (state) {
            if (state.evalCompleted) {
                if (state.evalCompleted === "Yes" &&
                    state.count === 3) {
                    setComponents([
                        ...components,
                        Slider3
                    ])
                } else {
                    setComponents([
                        ...components,
                        Slider3_1
                    ])
                }
            }
            if (state.count === 4 && state.companyName) {
                setComponents([
                    ...components,
                    Slider4,
                ])
            }
            if (state.count === 5) {
                setComponents([
                    ...components,
                    Slider5,
                ])
            }
            if (state.count === 6) {
                setComponents([
                    ...components,
                    Slider6,
                ])
            }
            if (state.count === 7) {
                setComponents([
                    ...components,
                    Slider7,
                ])
            }
        }
    }, [state])

    return (
        <div
            className="client-eval">
            <Header />
            <div className="container">
                <Slider
                    componentControl={true}
                    mainState={state}
                    updateMainState={(value) => setState(value)}
                    updateComponents={(arr) => setComponents(arr)}
                    components={components} />
            </div>

        </div>
    );
}

export default ClientEvaluation;