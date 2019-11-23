import BoardView from '../view/board/boardView';
import BoardModel from '../model/boardModel';

import Router from '../libs/router';
import EventBus from '../libs/eventBus';

const localEvents: Map<string, any> = new Map([
    ['addBoard', undefined],
    ['shareBoard', undefined],
    ['deleteBoard', undefined],
    ['moveBoard', undefined],
    ['logout', undefined],
    ['getBoards', undefined],
    ['getUser', undefined],
])

export default class BoardController {
    private boardView: BoardView;
    private boardModel: BoardModel;

    private eventBus: any;

    constructor(root: HTMLElement, router: Router) {
        this.eventBus = new EventBus(localEvents);

        this.boardView = new BoardView(root, router, this.eventBus);
        this.boardModel = new BoardModel(this.eventBus);
    }

    public getView() {
        return this.boardView;
    }
}