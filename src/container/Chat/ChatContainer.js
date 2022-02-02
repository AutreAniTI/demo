import logo from '../../assets/images/companyRelated/ti_logo_animation.gif';
import Avatar from '../../components/Avatar/Avatar';
import TextInput from '../../components/Inputs/TextInput';
import NextIcon from '../../assets/icons/Icons/NextIcon';
import Chat from '../../assets/icons/Icons/Chat';
import Call from '../../assets/icons/Icons/Call'
const ChatContainer = () => {
    return (
        <div
            className="chat">
            <div
                className="chat-left">
                <h3>
                    Chat
                </h3>
            </div>
            <div
                className="chat-right">
                <div className="chat-wrapper">
                    <div
                        className="chat-right-header">
                        <div className="header-wrapper">
                            <div className="profile">
                                <Avatar
                                    size="80"
                                    image={logo} />
                                <span className="name">
                                    TI solutions
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="chat-right-body">
                        <div className="message-wrapper">
                            <div
                                className="message message-them"
                            >
                                <p>How can you help me?</p>
                            </div>
                            <div
                                className="message message-us">
                                <Avatar
                                    size="50"
                                    image={logo} />
                                <p>It depends what you need, and how fast you need</p>
                            </div>
                        </div>
                        <div className = "chat-footer">
                            <div
                                className="buttons-wrapper">
                                    <div
                                        className = "btn">
                                            <Call/>
                                        </div>
                                        <div
                                        className = "btn">
                                            <Chat/>
                                        </div>
                            </div>
                            <div
                                className="form">
                                <TextInput
                                    placeholder="Complete Interaction Guide" />
                                <div>
                                    <NextIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatContainer;