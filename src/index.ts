import Router from './js/libs/router'

import Repo from './js/repository';

import IndexView from './js/view/index/indexView'

window.addEventListener('DOMContentLoaded', () => {
    const main: HTMLElement = document.querySelector('main');

    const router = new Router(main);
    const repo = new Repo();

    const indexView = new IndexView(main, repo.indexModel);

    router.add('/qwe', main, indexView);

    router.start();
})