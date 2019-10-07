import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Login from '../login';
import Signup from '../signup';

const template = `    <section class="content content_left-sided">
<div class="content__cell">
        <span>Все еще не зарегистрированы? Создайте аккаунт и получите доступ ко всем возможностям нашего сервиса!</span>
        <button class="button button_green js-signup">Зарегистрироваться</button>
    </div>
<div class="content__cell">
    <span>Уже зарегистрированы? Не пора ли добавить ноых задач в Ваш todo-лист?</span>
    <button class="button button_purple js-login">Войти</button>
</div>
</section>`;

export default class IndexView {
    repo: any;
    login: any;
    template: any;
    root: any;
    router: any;
    constructor(root, repo, router) {
        this.template = template;
        this.root = root;
        this.repo = repo();
        this.router = router;
    }

    render() {
        this.root.innerHTML = this.template;

        const login = document.querySelector('.js-login');
        login.addEventListener('click', () => {
            ReactDOM.render(<Login/>, document.querySelector('.js-to-render'));
            document.querySelector('.js-submit-login').addEventListener('click', (event) => {
                event.preventDefault();
                if (document.cookie !== 'auth=0') {
                    console.log('ERROR ON LOGIN! HAS COOKIE!')
                } else {
                    const resp = this.repo.login({
                        login: {
                            login: (document.querySelector('.js-input-login') as HTMLInputElement).value,
                            password: (document.querySelector('.js-input-pass') as HTMLInputElement).value
                        }
                    })
                    resp.then(data => {
                        data.json().then(res => {
                            console.log(res);
                            if (!res.errors) {
                                ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
                                this.router.toStartPage();
                                document.cookie = `auth=${res.data.authUser.token}`;
                            }
                        });
                    });
                }
            })
            document.querySelector('.js-close-btn').addEventListener('click', () => {
                ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
            })
        });

        const signup = document.querySelector('.js-signup');
        signup.addEventListener('click', () => {
            ReactDOM.render(<Signup/>, document.querySelector('.js-to-render'));
            document.querySelector('.js-submit-signup').addEventListener('click', (event) => {
                event.preventDefault();
                if (document.cookie !== 'auth=0') {
                    console.log('ERROR ON LOGIN! HAS COOKIE!')
                } else {
                    const resp = this.repo.signUp({
                        signup: {
                            email: (document.querySelector('.js-input-email') as HTMLInputElement).value,
                            login: (document.querySelector('.js-input-login') as HTMLInputElement).value,
                            password: (document.querySelector('.js-input-pass') as HTMLInputElement).value
                        }
                    });
                    resp.then(data => {
                        data.json().then(res => {
                            console.log(res);
                            if (!res.data.errors) {
                                document.cookie = `auth=${res.data.createUser.token}`;
                                ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
                                this.router.toStartPage();
                            }
                        });
                    });
                }
            })
            document.querySelector('.js-close-btn').addEventListener('click', () => {
                ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
            })
        })
    }

    close() {
        console.log('close...');
    }

    hide() {
        console.log('hide...');
    }
}