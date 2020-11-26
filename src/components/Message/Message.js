import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div>
                <div className = "user_block">
                    <p className = "author">Вы:</p>
                    <div className = "message_block">
                        <p className = "message">{this.props.message}</p>
                    </div>
                </div>
                <div className = "author_block">
                    <p className = "author">Ответ:</p>
                    <div className = "answer_block">
                        <p className = "message">Проверка</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;