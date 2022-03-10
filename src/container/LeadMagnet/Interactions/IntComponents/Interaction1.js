import MessageBox from "../../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const Interaction1 = ({index}) => {
    const message = MESSAGES[index];
    return (
        <div className = "int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox 
                text={message.text} />
        </div>
    );
}

export default Interaction1;