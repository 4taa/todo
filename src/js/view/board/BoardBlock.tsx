import * as React from 'react';
import Block from '../../components/Block';
import Form from '../../components/Forms';
import Labels from '../../components/Labels';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class extends React.Component<any> {
    usersWrap(users: any) {
        const res = [];
        for (let i = 0; i < Object.keys(users).length; i++) {
            res.push((<Block key={i} className="task-users">{users[i].name}</Block>))
        }
        return res;
    }

    render () {
        const result = [];
        console.log(this)
        for (let i = 0; i < Object.keys(this.props).length; i++) {
            result.push((
                <Block id={this.props[i].id} key={i} className="task content__cell js-task-block">
                    <Block className="func-btns">
                        <Labels className="js-share-board">
                            <Input className="js-share-input"></Input>
                            <Button className={'js-share-submit'} type={'submit'}>Поделиться</Button>
                        </Labels>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block>Название</Block>
                        <Block className="task-name">{this.props[i].name}</Block>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block>Текст</Block>
                        <Block className="task-text">{this.props[i].text}</Block>
                    </Block>
                    <Block className="task-users-wrapper">
                        <Block>Пользователи</Block>
                        {this.usersWrap(this.props[i].user)}
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
