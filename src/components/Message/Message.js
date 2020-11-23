import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div>
                <div className = "user_block">
                    <p className = "author">Вы:<span className = "message">{this.props.message}</span></p>
                </div>
                <div className = "answer_block">
                    <p className = "author"><span className = "message">Проверка</span>:Ответ</p>
                </div>
            </div>
        );
    }
}

export default Message;