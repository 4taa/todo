import IGraphQL from '../interfaces/IGraphQL';

export default (data: IGraphQL): Promise<Response> => {
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
