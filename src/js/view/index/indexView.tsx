import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Login from '../login';
import Signup from '../signup';

const template = `    <section class='content content_left-sided'>
<div class='content__cell'>
        <span>Все еще не зарегистрированы? Создайте аккаунт и получите доступ ко всем возможностям нашего сервиса!</span>
        <button class='button button_green js-signup'>Зарегистрироваться</button>
    </div>
<div class='content__cell'>
    <span>Уже зарегистрированы? Не пора ли добавить ноых задач в Ваш todo-лист?</span>
    <button class='button button_purple js-login'>Войти</button>
</div>
</section>`;

export default class IndexView {
    template: string;

    constructor(private root: HTMLElement, private router, private eventBus) {
        this.template = template;
        this.root = root;
        this.router = router;
    }

    render() {
        this.root.innerHTML = this.template;

        // this.eventBus.callEvent('checkLogin');

        const login = document.querySelector('.js-login');
        login.addEventListener('click', () => {
            ReactDOM.render(<Login {...{eventBus: this.eventBus}}/>, document.querySelector('.js-to-render'));
        });

        const signup = document.querySelector('.js-signup');
        signup.addEventListener('click', () => {
            ReactDOM.render(<Signup {...{eventBus: this.eventBus}}/>, document.querySelector('.js-to-render'));
        })
    }
}