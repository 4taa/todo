import * as ReactDOM from 'react-dom';
import * as React from 'react';

import BoardAdder from '../boardAdder';
import Board from './board';
import { readSync } from 'fs';

const template = `<section class="content content_centered content_top-aligned">
<h1>Мои доски задач</h1>
<div class="js-add-board">Добавить доску</div>
<div class="task-wall js-to-render-boards">
</div>
<div class="js-logout">Выйти</div>
</section>`;

export default class BoardView {
    repo: any;
    login: any;
    template: any;
    root: any;
    router: any;
    boards: any;
    token: any;
    id: any;
    constructor(root, repo, router) {
        this.template = template;
        this.root = root;
        this.repo = repo();
        this.router = router;
    }

    render() {
        this.root.innerHTML = this.template;

        this.preparePage();
    }

    renderBoards() {
        console.log(this.boards);
        ReactDOM.render(<Board {...this.boards}/>, document.querySelector('.js-to-render-boards'));
        document.querySelector('.js-share-submit').addEventListener('click', (event) => {
            event.preventDefault();
            this.shareBoard();
        }) 
    }

    preparePage() {
        this.token = document.cookie.match(/\=(.*)/)[1];

        const resUser = this.repo.getUserByToken({
            userByToken: {
                token: this.token,
            }
        });

        resUser.then(res => {
            if (!res.errors) {
                res.json().then(data => {
                    this.id = data.data.user.id;
                    const boards = this.repo.getBoardsId({
                        getBoardsId: {
                            id: this.id
                        }
                    })
                    boards.then(dataRes => {
                        dataRes.json().then(respData => {
                            if (!respData.errors) {
                                this.boards = respData.data.todosForUser;
                                ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
                                this.renderBoards();
                            }
                        });
                    })
                    document.querySelector('.js-add-board').addEventListener('click', () => this.addBoard())
            
                    document.querySelector('.js-logout').addEventListener('click', () => this.logOut())
                })
            }
        });
    }

    addBoard() {
        ReactDOM.render(<BoardAdder/>, document.querySelector('.js-to-render'));
        document.querySelector('.js-submit-board').addEventListener('click', (event) => {
            event.preventDefault();
            const resp = this.repo.createBoard({
                newBoard: {
                    text: (document.querySelector('.js-input-text') as HTMLInputElement).value,
                    name: (document.querySelector('.js-input-name') as HTMLInputElement).value,
                    userToken: this.token,
                }
            });
            resp.then(data => {
                data.json().then(res => {
                    if (!res.errors) {
                        const boards = this.repo.getBoardsId({
                            getBoardsId: {
                                id: this.id,
                            }
                        })
                        boards.then(dataRes => {
                            dataRes.json().then(respData => {
                                if (!respData.errors) {
                                    this.boards = respData.data.todosForUser;
                                    ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
                                    this.renderBoards();
                                }
                            });
                        })
                    }
                });
            }) 
        });
        document.querySelector('.js-close-btn').addEventListener('click', () => {
            ReactDOM.unmountComponentAtNode(document.querySelector('.js-to-render'));
        })
    }

    shareBoard() {

    }

    logOut() {
        const resp = this.repo.logout({
            logout: {
                token: this.token,
            }
        });
        resp.then(data => {
            if (!data.errors) {
                this.router.toLoginPage();
                document.cookie = 'auth=0';
            }
        })
    }
}