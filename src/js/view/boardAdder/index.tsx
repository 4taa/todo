import * as React from 'react';
import Block from '../../components/Block';
import BoardAdder from './BoardAdder';

export default (props: any) => {
    return (
        <Block>
            <BoardAdder {...props}/>
        </Block>
    )
}