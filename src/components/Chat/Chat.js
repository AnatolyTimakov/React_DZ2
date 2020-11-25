import React, {Component} from 'react';
import './Chat.css';
import Message from '../Message/'

class Chat extends Component {
    state = {
        messages: [],
        messageInput: '',
        user: 'Вы: ',
        answer: 'Ответ: '
    };
    changeInputMessage = event => {
        this.setState({messageInput: event.target.value});
    };
    sendMessageOnEnter = event => {
        if (event.key === 'Enter'){
            this.setState({
               messages: [...this.state.messages, this.state.messageInput]
            });
            this.setState({messageInput: ''});
        }
<<<<<<< HEAD
        this.scrollDown();
=======
>>>>>>> ac8ec9601349bf488e9924ca761cac1b55294870
    };
    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, this.state.messageInput]
         });
         this.setState({messageInput: ''});
<<<<<<< HEAD
         this.scrollDown();
    }

    scrollDown = () => {
        this.messagesEnd.scrollIntoView({ behaviour: "smooth" });
    }

=======
    }
>>>>>>> ac8ec9601349bf488e9924ca761cac1b55294870
    render() {
        const {
            sendMessage,
            changeInputMessage,
            sendMessageOnEnter,
<<<<<<< HEAD
            state: {messages, messageInput, user}
=======
            state: {messages, messageInput, user, answer}
>>>>>>> ac8ec9601349bf488e9924ca761cac1b55294870
        } = this;

        return (
            <div className = "chat">
                <div className = "messages">
                    {messages.map((item, index) => <Message key={index} author={user} message={item}/>)}
<<<<<<< HEAD
                    <div style={{ float:"left", clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
=======
                    {/* {setTimeout(() => <Message author= {answer} message={"Проверка"}/>, 5000)} */}
>>>>>>> ac8ec9601349bf488e9924ca761cac1b55294870
                </div>
                <div className = "input_block">
                    <textarea className = "input-message" value={messageInput}  onChange={changeInputMessage} onKeyPress={sendMessageOnEnter}/>
                    <button className = "input-button" onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        );
    }
}

export default Chat;