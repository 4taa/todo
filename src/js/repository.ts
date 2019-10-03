import {doRequest} from './libs/network';

export default class Repo {
    constructor() {}

    indexModel() {
        const login = (data: any) => {
            let dataToReturn = null;
            doRequest(data).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        dataToReturn = data;
                    });
                }
            }, (error) => {
                console.log(error);
            });

            return dataToReturn;
        }

        const signUp = (data: any) => {
            let dataToReturn = null;
            doRequest(data).then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        dataToReturn = data;
                    });
                }
            }, (error) => {
                console.log(error);
            });

            return dataToReturn;
        }

        return {
            login,
            signUp,
        }
    }

    boardModel() {
        const logout = (data: any) => {

        }

        const createBoard = (data: any) => {

        }

        const deleteBoard = (data: any) => {

        }

        const moveBoard = (data: any) => {

        }

        const changeBoard = (data: any) => {
            
        }
    }
}