import * as React from 'react';
import Block from '../../components/Block';
import Board from './BoardBlock';

export default (props) => {
    console.log('props', props)
    return (
        <Block className={'task-flex'}>
            <Board {...props}/>
        </Block>
    )
}