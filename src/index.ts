import Router from './js/libs/router'

import IndexController from './js/controller/indexCtrl';
import BoardController from './js/controller/boardCtrl';

window.addEventListener('DOMContentLoaded', () => {
    const main: HTMLElement = document.querySelector('main');

    const router = new Router(main);

    const indexController = new IndexController(main, router);
    const boardController = new BoardController(main, router);

    router.add('/login', main, indexController.getView());
    router.add('/', main, boardController.getView());

    router.start();
})