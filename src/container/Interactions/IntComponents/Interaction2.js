import RadioInput from "../../../components/Inputs/RadioInput";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";
import { useState } from "react";

const Interaction2 = ({ index }) => {
    const message = MESSAGES[index];
    const [checked, setChecked] = useState("Yes")

    return (
        <div className="int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox
                text={message.text} />
            <RadioInput
                options={["Yes", "No"]}
                checked={checked}
                updateChecked={(value) => setChecked(value)}
            />
        </div>
    );
}

export default Interaction2;