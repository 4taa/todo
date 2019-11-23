import doRequest from '../libs/network';

export default class IndexModel {
    constructor(private eventBus) {
        this.eventBus.addCallback('login',      this.login.bind(this));
        this.eventBus.addCallback('signup',     this.signup.bind(this));
    }

    private login(loginValue: string, passwordValue: string) {
        doRequest({operationName: 'authUser', variables: {}, query: `mutation authUser {authUser(input: {login: "${loginValue}", password: "${passwordValue}"}){userID token}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }

    private signup(loginValue: string, passwordValue: string) {
        doRequest({operationName: 'createUser', variables: {}, query: `mutation createUser {createUser(input: {name: "${loginValue}", password: "${passwordValue}", id: "", token: ""}){userID token}}`}).then((res) => {
            res.json().then(kek => console.log(kek));
        });
    }
}