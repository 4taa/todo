import Router from './js/libs/router'

import Repo from './js/repository';

import IndexView from './js/view/index/indexView'
import BoardView from './js/view/board/boardView'

window.addEventListener('DOMContentLoaded', () => {
    const main: HTMLElement = document.querySelector('main');

    const router = new Router(main);
    const repo = new Repo();

    const indexView = new IndexView(main, repo.indexModel, router);
    const boardView = new BoardView(main, repo.boardModel, router);

    router.add('/qwe', main, indexView);
    router.add('/', main, boardView);

    router.start();
})