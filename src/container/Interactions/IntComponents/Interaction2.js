import RadioInput from "../../../components/Inputs/RadioInput";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const Interaction2 = ({index}) => {
    const message = MESSAGES[index];
    
    return (
        <div className = "int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox 
                text={message.text} />
            <RadioInput />
        </div>
    );
}

export default Interaction2;