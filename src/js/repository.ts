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
            query: `query findTodos {todos { text id done name cards {id name comments {user {name token id}text}}}`,
        }
    } else if (data.getBoardsId) {
        reqToSend = {
            operationName: "usersTodo",
            variables: {},
            query: `query usersTodo {\n  todosForUser(id: \"${data.getBoardsId.id}\") {\n    id\n    name\n    text\n    done\n    user {\n      name\n    }\ncards{id comments{user{name id} text} users{name id} text name }  }\n}\n\n`,
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
    } else if (data.shareBoard) {
        reqToSend = {
            operationName: "share",
            variables: {},
            query: `mutation share {\n  shareBoard(input: {id: \"${data.shareBoard.id}\", userName: \"${data.shareBoard.userName}\"}) {\n    user {\n    id\n    name\n} text\n    name\n\n}\n}\n\n`
        }
    } else if (data.addCard) {
        reqToSend = {
            operationName: "addCard",
            variables: {},
            query: `mutation addCard {\naddCard(input: {text:\"${data.addCard.text}\", name:\"${data.addCard.name}\", todoId:\"${data.addCard.todoId}\", userId:\"${data.addCard.userById}\"}) {\nid\ncomments {\nuser {\nname\n}\ntext\n}\ntext\nname\n}\n}`
        }
    } else if (data.addComment) {
        reqToSend = {
            operationName: "addComment",
            variables: {},
            query: `mutation addComment {\naddCommentToCard(input:{cardId:\"${data.addCard.cardId}\", todoId: \"${data.addComment.todoId}\", userId: \"${data.addComment.userId}\", text:\"${data.addComment.text}\"}) {\nid\ncomments {\nuser {\nname\n}\ntext\n}\ntext\nname\n}\n}`
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
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const moveBoard = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const changeBoard = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }
        
        const addCard = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }
        
        const addComment = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
        }

        const shareBoard = (data: any) => {
            return doRequest(refactorMutation(data)).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            }, (error) => {
                console.log(error);
            });
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
            shareBoard,
            addComment,
            addCard,
        }
    }
}