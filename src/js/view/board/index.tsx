import * as React from 'react';
import Section from '../../components/Section';
import BoardPage from './BoardPage';

export default (props) => {
    return (
        <Section className={'content content_centered content_top-aligned'}>
            <BoardPage {...props}/>
        </Section>
    )
}
