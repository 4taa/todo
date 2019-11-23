import * as React from 'react';
import Block from '../../components/Block';
import Labels from '../../components/Labels';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class extends React.Component<any> {
    usersWrap(users: any) {
        return Object.keys(users).map((prop, i) => <Block key={i} className='task-users'>{users[i].name}</Block>)
    }

    commentsWrap(comments: any) {
        return Object.keys(comments).map((prop, i) => <Block key={i} className='comments-text'>{comments[i].name}</Block>)
    }

    render() {
        return Object.keys(this.props).map((prop, i) => {
                <Block id={this.props[i].id} key={i} className='task content__cell js-task-block'>
                    <Block className='func-btns'>
                        <Labels className='js-share-board'>
                            <Input className='js-share-input'></Input>
                            <Button className={'js-share-submit'} type={'submit'}>Поделиться</Button>
                        </Labels>
                    </Block>
                    <Block className='task-users-wrapper'>
                        <Block>Название</Block>
                        <Block className='task-name'>{this.props[i].name}</Block>
                    </Block>
                    <Block className='task-users-wrapper'>
                        <Block>Текст</Block>
                        <Block className='task-text'>{this.props[i].text}</Block>
                    </Block>
                    <Block className='task-users-wrapper'>
                        <Block>Исполнитель</Block>
                        {this.usersWrap(this.props[i].user)}
                    </Block>
                    <Block className='comments-block'>
                        <Block>Комментарии</Block>
                        {this.commentsWrap(this.props[i].user)}
                    </Block>
                </Block>
        });
    }
}
