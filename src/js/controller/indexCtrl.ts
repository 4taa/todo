import IndexView from '../view/index/indexView';
import IndexModel from '../model/indexModel';

import Router from '../libs/router';
import EventBus from '../libs/eventBus';

const localEvents: Map<string, any> = new Map([
    ['login', undefined],
    ['signup', undefined],
    ['checkLogin', undefined],
])

export default class IndexController {
    private indexView: IndexView;
    private indexModel: IndexModel;

    private eventBus: EventBus;

    constructor(root: HTMLElement, router: Router) {
        this.eventBus = new EventBus(localEvents);

        this.indexView = new IndexView(root, router, this.eventBus);
        this.indexModel = new IndexModel(this.eventBus);
    }

    public getView() {
        return this.indexView;
    }
}