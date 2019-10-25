import * as React from 'react';
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
                <Block>Регистрация</Block>
                <Block className={'error error_green'}>Пароль должен состоять минимум из 4 символов!</Block>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Логин</Block>
                    <Input className={'form-field__input js-input-login'} type={'text'}/>
                </Labels>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Электронная почта</Block>
                    <Input className={'form-field__input js-input-email'} type={'text'}/>
                </Labels>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Пароль</Block>
                    <Input className={'form-field__input js-input-pass'} type={'password'}/>
                </Labels>

                <Button className={'button button_purple js-submit-signup'} type={'submit'}>Зарегистрироваться</Button>
            </Form>
        )
    }
}
