import INetwork from '../interfaces/INetwork';

const getAddress = () => {
    return;
}

export const doRequest = (data: INetwork): Promise<Response> => {
    return fetch('http://79.137.175.11' + '/request', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data.body),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}
