import * as React from 'react';
import Block from '../../components/Block';
import Form from '../../components/Forms';
import Labels from '../../components/Labels';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class extends React.Component<any> {
    render () {
        const result = [];
        console.log(this)
        for (let i = 0; i < Object.keys(this.props).length; i++) {
            result.push((
                <Block key={i} className="task content__cell">
                    <Block className="func-btns">
                        <Labels className="js-share-board">
                            <Input className="js-share-input"></Input>
                            <Button className={'js-share-submit'} type={'submit'}>Поделиться</Button>
                        </Labels>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block className="task-name">{this.props[i].name}</Block>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block className="task-text">{this.props[i].text}</Block>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block>Пользователи</Block>
                        <Block className="task-users">{this.props[i].user.name.replace('user ', '')}</Block>
                    </Block>
                    <Block className="comments-block">
                        Coming soon
                    </Block>
                </Block>
            ));
        }

        return result;
    }
}
