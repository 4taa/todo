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
                <Block>Новая доска</Block>
                <Block className={'error error_green'}>Неправильный логин или пароль! Попробуйте еще раз.</Block>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Название</Block>
                    <Input className={'form-field__input js-input-name'} type={'text'}/>
                </Labels>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Текст</Block>
                    <Input className={'form-field__input js-input-text'}/>
                </Labels>

                <Button className={'button button_purple js-submit-board'} type={'submit'}>Создать</Button>
            </Form>
        )
    }
}
