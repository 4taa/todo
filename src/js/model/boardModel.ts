import doRequest from '../libs/network';

export default class BoardModel {
    constructor(private eventBus) {
        this.eventBus.addCallback('addBoard',       this.addBoard.bind(this));
        this.eventBus.addCallback('shareBoard',     this.shareBoard.bind(this));
        this.eventBus.addCallback('deleteBoard',    this.deleteBoard.bind(this));
        this.eventBus.addCallback('changeBoard',    this.changeBoard.bind(this));
        this.eventBus.addCallback('getBoards',      this.getBoards.bind(this));
        this.eventBus.addCallback('getUser',        this.getBoards.bind(this));

        this.eventBus.addCallback('logout',         this.logout.bind(this));
    }

    private getBoards(idInput: string) {
        doRequest({operationName: 'BoardsForUser', variables: {}, query: `query BoardsForUser {BoardsForUser(id: ${idInput}){id text name}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    private addBoard(textInput: string, userToken: string, nameInput: string) {
        doRequest({operationName: 'createBoard', variables: {}, query: `mutation createBoard {createBoard(input: {text: "${textInput}", userToken: "${userToken}", name: "${nameInput}"}){user{id} text done}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    private shareBoard(boardIdInput: string, userNameInput: string) {
        doRequest({operationName: 'shareBoard', variables: {}, query: `mutation shareBoard {shareBoard(input: {id: "${boardIdInput}", userName: "${userNameInput}"})}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    private changeBoard(boardIdInput: string, nameInput: string, textInput: string) {
        doRequest({operationName: 'changeBoard', variables: {}, query: `mutation changeBoard {changeBoard(input: {id: "${boardIdInput}", name: "${nameInput}", text: "${textInput}"})}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    private deleteBoard(userIdInput: string, boardIdInput: string) {
        doRequest({operationName: 'deleteBoard', variables: {}, query: `mutation deleteBoard {deleteBoard(input: {userID: "${userIdInput}", id: "${boardIdInput}"})}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    // TODO: REST API
    private getUser(tokenInput: string) {
        doRequest({operationName: 'logoutUser', variables: {}, query: `mutation logoutUser {logoutUser(input: token:"${tokenInput}"}){userID token}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    // TODO: REST API
    private logout(tokenInput: string) {
        doRequest({operationName: 'logoutUser', variables: {}, query: `mutation logoutUser {logoutUser(input: token:"${tokenInput}"}){userID token}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }
}