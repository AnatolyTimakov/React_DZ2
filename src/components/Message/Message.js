import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div>
                <div className = "user_block">
<<<<<<< HEAD
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
=======
                    <p className = "author">Вы:<span className = "message">{this.props.message}</span></p>
                </div>
                <div className = "answer_block">
                    <p className = "author"><span className = "message">Проверка</span>:Ответ</p>
>>>>>>> ac8ec9601349bf488e9924ca761cac1b55294870
                </div>
            </div>
        );
    }
}

export default Message;