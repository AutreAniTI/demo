import Dropdown from "../../../components/Dropdown/Dropdown";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const arr = ["option1","option2", "option3", "option4"]

const Interaction4 = ({index}) => {
    const message = MESSAGES[index];
    
    return (
        <div className = "int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox 
                text={message.text} />
            <Dropdown 
            arr = {arr}/>
        </div>
    );
}

export default Interaction4;