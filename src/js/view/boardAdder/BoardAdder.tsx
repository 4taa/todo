import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Block from '../../components/Block';
import Form from '../../components/Forms';
import Labels from '../../components/Labels';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class extends React.Component<any> {
    private name: string;
    private text: string;

    render () {
        return (
            <Form className={'content__cell content__cell_form js-form-adder'}>
                <Block className={'js-close-btn'}>Закрыть</Block>
                <Block>Новая доска</Block>
                <Block className={'error error_green'}>Неправильный логин или пароль! Попробуйте еще раз.</Block>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Название</Block>
                    <Input className={'form-field__input js-input-name'} type={'text'} value={this.props.name}/>
                </Labels>

                <Labels className={'form-field'}>
                    <Block className={'form-field__name'}>Текст</Block>
                    <Input className={'form-field__input js-input-text'} value={this.props.text}/>
                </Labels>

                <Button className={'button button_purple js-submit-board'} type={'submit'}>Создать</Button>
            </Form>
        )
    }

    componentDidMount() {
        document.querySelector('.js-submit-board').addEventListener('click', this.submitBoard.bind(this));

        document.querySelector('.js-close-btn').addEventListener('click', this.close.bind(this));
    }

    componentWillMount() {
        console.log(this)
    }

    private submitBoard(event) {
        event.preventDefault();

        const textInput = (document.querySelector('.js-input-text') as HTMLInputElement).value;
        const tokenInput = (document.querySelector('.js-input-text') as HTMLInputElement).value;
        const nameInput = (document.querySelector('.js-input-name') as HTMLInputElement).value;

        this.props.events.get('addBoard')(textInput, tokenInput, nameInput);
    }

    private close() {
        document.querySelector('.js-close-btn').removeEventListener('click', this.close.bind(this));
        document.querySelector('.js-submit-board').removeEventListener('click', this.submitBoard.bind(this));
        ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
    }
}
