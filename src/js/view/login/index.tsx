import * as React from 'react';
import Block from '../../components/Block';
import Login from './login';

export default (props) => {
    console.log(props)
    return (
        <Block>
            <Login {...props}/>
        </Block>
    )
}