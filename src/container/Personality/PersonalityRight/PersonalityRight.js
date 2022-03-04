import { useState } from "react";
import { useEffect } from "react";
import DATA from './data';
import List from "./List";

const PersonalityRight = () => {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState()
    const [state, setState] = useState({});

    useEffect(() => {
        setActive(Object.keys(DATA)[count])
    }, [count]);


    useEffect(() => {
        if(active) {
            setState({
                ...state,
                [active]: []
            })
        }
    },[active])

    console.log(state)
    const handleNextClick = () => {
        if (count === Object.keys(DATA).length - 1) {
            return;
        }
        if(!state[active].length) return;
        setCount(count + 1);
    }
    return (
        <div
            className="right">
            {
                active && Object.keys(state)?.length === count + 1 &&
                <>
                    <div>
                    <h1>
                        {
                            Object.keys(state)?.length < 8?
                            "Describe who you are"
                            :
                            "How Must You Behave to Be Successful At Work"
                        }               
                    </h1>
                    <h2>{active}</h2>
                    <p className="directions"><b>DIRECTIONS: </b>Please read down the columns
                        and check the words <strong>
                            {
                               Object.keys(state)?.length < 8?
                               "you believe describe yourself."
                               :
                               "that describe how you must behave to be successful in your current position." 
                            }
                            </strong></p>
                    </div>
                    <List
                        data = {DATA[active]}
                        arr={state[active]}
                        updateArr={(arr) => setState({
                            ...state,
                            [active]: arr
                        })}
                    />

                    <div    
                        className = {`next-btn ${!state[active].length? "next-btn-disabled": ""}`}
                        onClick={handleNextClick}/>
                </>
            }
        </div>
    );
}

export default PersonalityRight;