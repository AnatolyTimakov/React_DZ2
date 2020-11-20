import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div>
                <p className = "author">Вы:<span className = "message">{this.props.message}</span></p>
                <div className = "answer_block">
                    <p className = "author">Ответ:<span className = "message">Проверка</span></p>
                </div>
            </div>
        );
    }
}

export default Message;