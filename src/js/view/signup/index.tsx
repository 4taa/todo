import * as React from 'react';
import Block from '../../components/Block';
import Signup from './signup';

export default (props) => {
    return (
        <Block>
            <Signup {...props}/>
        </Block>
    )
}