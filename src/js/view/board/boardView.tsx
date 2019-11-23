import * as ReactDOM from 'react-dom';
import * as React from 'react';

import BoardInit from './index';

import BoardAdder from '../boardAdder';
import Board from './board';

import IBoard from '../../interfaces/IBoards';

const template = `<section class='content content_centered content_top-aligned'>
<h1>Мои доски задач</h1>
<div class='js-add-board'>Добавить доску</div>
<div class='task-wall js-to-render-boards'>
</div>
<div class='js-logout'>Выйти</div>
</section>`;

export default class BoardView {
    template: any;
    boards: Array<IBoard>;
    constructor(private root: HTMLElement, private router, private eventBus) {
        this.template = template;
        this.root = root;
        this.router = router;
    }

    preparePage() {
        this.eventBus.callEvent('getUser');
        this.eventBus.callEvent('getBoards', this.boards);
    }

    render() {
        this.preparePage();

        ReactDOM.render(<BoardInit/>, document.querySelector('main'));

        document.querySelector('.js-add-board').addEventListener('click', event => ReactDOM.render(<BoardAdder {...this.eventBus}/>, document.querySelector('.js-to-render')));

        document.querySelector('.js-logout').addEventListener('click', () => this.eventBus.callEvent('logout'));
    }

    renderBoards() {
        this.eventBus.callEvent('preparePage'); 
        ReactDOM.render(<Board {...{boards: this.boards, eventBus: this.eventBus}}/>, document.querySelector('.js-to-render-boards'));
    } 
}