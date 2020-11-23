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
    };
    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, this.state.messageInput]
         });
         this.setState({messageInput: ''});
    }
    render() {
        const {
            sendMessage,
            changeInputMessage,
            sendMessageOnEnter,
            state: {messages, messageInput, user, answer}
        } = this;

        return (
            <div className = "chat">
                <div className = "messages">
                    {messages.map((item, index) => <Message key={index} author={user} message={item}/>)}
                    {/* {setTimeout(() => <Message author= {answer} message={"Проверка"}/>, 5000)} */}
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