# 2 домашнее задание

Нужно собрать упрощеную модель окна мессанджера. [Пример](http://5b2a83c08df8941c77730f60.silly-curran-c5dc53.netlify.com).

Некоторые тонкости:
1. Для того, что бы обрабатывать изменения инпута, нужно использовать метод `onChange`.
1. Для того, что бы обработать нажатие кнопки Enter, нужно использовать метод `onKeyPress`, а в хендлере делать проверку `if (event.key === 'Enter')`.
1. Значение инпута должно быть равно значению из стейта — `<input value={this.state.messageInput} />`