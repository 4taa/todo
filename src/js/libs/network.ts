import INetwork from '../interfaces/INetwork';

const getAddress = () => {
    return;
}

export const doRequest = (data: any): Promise<Response> => {
    return fetch('http://localhost:8080/query', {
        method: 'POST',
        mode: 'cors',
        // credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json;charset=utf-8',
            'Connection': 'keep-alive',
            'DNT': '1',
        },
    });
}


// {"operationName":"auth","variables":{},"query":"mutation createUser {\n  createUser(input: {id: \"122\", email: \"123\", login: \"14232\", password: \"123\"}) {\n    id\n    name\n  }\n}\n\nmutation auth {\n  authUser(input: {login: \"1423\", password: \"123\"}) {\n    token\n  }\n}\n\nmutation logout {\n  logoutUser(input: {login: \"q\", token: \"q\"})\n}\n\nmutation logout1 {\n  logoutUser(input: {login: \"1423\", token: \"qwe\"})\n}\n\nquery getUsers {\n  users {\n    token\n    name\n  }\n}\n\nquery getUser {\n  user(id: \"121\") {\n    id\n    name\n  }\n}\n\nmutation createTodo1 {\n  createTodo(input: {text: \"todo1\", userId: \"1\", name: \"kek\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nmutation createTodo2 {\n  createTodo(input: {text: \"todo2\", userId: \"2\", name: \"lul\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nmutation createTodo3 {\n  createTodo(input: {text: \"todo3\", userId: \"3\", name: \"kek\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nquery findTodos {\n  todos {\n    text\n    done\n    user {\n      name\n    }\n  }\n}\n"}
// {"operationName":"auth","variables":{},"query":"mutation createUser {\n  createUser(input: {id: \"122\", email: \"123\", login: \"14232\", password: \"123\"}) {\n    id\n    name\n  }\n}\n\nmutation auth {\n  authUser(input: {login: \"1423\", password: \"123\"}) {\n    token\n  }\n}\n\nmutation logout {\n  logoutUser(input: {login: \"q\", token: \"q\"})\n}\n\nmutation logout1 {\n  logoutUser(input: {login: \"1423\", token: \"qwe\"})\n}\n\nquery getUsers {\n  users {\n    token\n    name\n  }\n}\n\nquery getUser {\n  user(id: \"121\") {\n    id\n    name\n  }\n}\n\nmutation createTodo1 {\n  createTodo(input: {text: \"todo1\", userId: \"1\", name: \"kek\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nmutation createTodo2 {\n  createTodo(input: {text: \"todo2\", userId: \"2\", name: \"lul\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nmutation createTodo3 {\n  createTodo(input: {text: \"todo3\", userId: \"3\", name: \"kek\"}) {\n    user {\n      id\n    }\n    text\n    done\n  }\n}\n\nquery findTodos {\n  todos {\n    text\n    done\n    user {\n      name\n    }\n  }\n}\n"} 