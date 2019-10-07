import {doRequest} from './libs/network';

const refactorMutation = (data: any): any => {
    let reqToSend;
    if (data.signup) {
        reqToSend = {
            variables: {},
            operationName: "createUser",
            query: `mutation createUser {\n  createUser(input: {email: \"${data.signup.email}\", login: \"${data.signup.login}\", password: \"${data.signup.password}\"}) {\n    token\n  }\n}\n\n`,
        }
    } else if (data.login) {
        reqToSend = {
            operationName: "auth",
            variables: {},
            query: `mutation auth {\n  authUser(input: {login: \"${data.login.login}\", password: \"${data.login.password}\"}) {\n    token\n  }\n}\n\n`,
        }
    } else if (data.newBoard) {
        reqToSend = {
            operationName: "createTodo",
            variables: {},
            query: `mutation createTodo {\n  createTodo(input: {text: \"${data.newBoard.text}\", userToken: \"${data.newBoard.userToken}\", name: \"${data.newBoard.name}\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\n`,
        }
    } else if (data.getBoards) {
        reqToSend = {
            operationName: "findTodos",
            variables: {},
            query: `query findTodos {\n  todos {\n    name\n    text\n    done\n    user {\n      name\n    }\n  }\n}\n`,
        }
    } else if (data.getBoardsId) {
        reqToSend = {
            operationName: "usersTodo",
            variables: {},
            query: `query usersTodo {\n  todosForUser(id: \"${data.getBoardsId.id}\") {\n    name\n    text\n    done\n    user {\n      name\n    }\n  }\n}\n\n`,
        }
    } else if (data.logout) {
        reqToSend = {
            operationName: "logout",
            variables: {},
            query: `mutation logout {\n  logoutUser(input: {token: \"${data.logout.token}\"})\n}\n\n`,
        }
    } else if (data.userByToken) {
        reqToSend = {
            operationName: "getUserToken",
            variables: {},
            query: `query getUserToken {\n  user(token: \"${data.userByToken.token}\") {\n    name\n    id\n}\n}\n\n`
        }
    } else if (data.userById) {
        reqToSend = {
            operationName: "userById",
            variables: {},
            query: `query userById {\n  userById(id: \"${data.userById.id}\") {\n    name\n    token\n}\n}\n\n`
        }
    }
    return reqToSend;
}

export default class Repo {
    constructor() {}

    indexModel() {
        const login = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const signUp = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        return {
            login,
            signUp,
        }
    }

    boardModel() {
        const logout = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const createBoard = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const deleteBoard = (data: any) => {

        }

        const moveBoard = (data: any) => {

        }

        const changeBoard = (data: any) => {
            
        }

        const getBoards = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const getBoardsId = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const getUserByToken = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const getUserById = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        return {
            logout,
            createBoard,
            deleteBoard,
            moveBoard,
            changeBoard,
            getBoards,
            getUserById,
            getUserByToken,
            getBoardsId,
        }
    }
}