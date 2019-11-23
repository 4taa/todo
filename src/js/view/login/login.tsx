import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Block from '../../components/Block';
import Form from '../../components/Forms';
import Labels from '../../components/Labels';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class extends React.Component<any> {
    render () {
        return (
            <Form className={'content__cell content__cell_form'}>
                <Block className={'js-close-btn'}>Закрыть</Block>
                <Block>Вход</Block>
                <Block className={'error error_green'}>Неправильный логин или пароль! Попробуйте еще раз.</Block>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Логин или электронная почта</Block>
                    <Input className={'form-field__input js-input-login'} type={'text'}/>
                </Labels>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Пароль</Block>
                    <Input className={'form-field__input js-input-pass'} type={'password'}/>
                </Labels>

                <Button className={'button button_purple js-submit-login'} type={'submit'}>Войти</Button>
            </Form>
        )
    }

    componentDidMount() {
        document.querySelector('.js-submit-login').addEventListener('click', (event) => {
            event.preventDefault();

            this.submitLogin();
        });

        document.querySelector('.js-close-btn').addEventListener('click', () => ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render')))
    }

    private submitLogin() {
        const login = (document.querySelector('.js-input-login') as HTMLInputElement).value;
        const pass = (document.querySelector('.js-input-pass') as HTMLInputElement).value;

        this.props.eventBus.callEvent('login', login, pass);
    }
}
