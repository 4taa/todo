import * as React from 'react';
import Block from '../../components/Block';
import Header from '../../components/Header';

export default class extends React.Component<any> {
    componentWillMount() {
        console.log('kek mount', this.props)
    }

    render () {
        console.log('kekekek');
        return (
            <Block>
                <Header>Мои доски задач</Header>
                <Block className={'func-things-header'}>
                    <Block className={'js-add-board'}>Добавить доску</Block>
                    <Block className={'js-logout'}>Выйти</Block>
                </Block>
                <Block className={'task-wall js-to-render-boards'}></Block>
            </Block>
        );
    }

    componentDidMount() {
        document.querySelector('.js-logout').addEventListener('click', (event) => {
            event.preventDefault();

            this.props.
        });
    }
}
