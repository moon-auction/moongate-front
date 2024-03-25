import APIWrapper from './APIWrapper';

type RegisterPayload = {
    email: string;
    password: string;
    confirm: string;
};

export function GetConfirmCode() {
    return new Promise((resolve, reject) => {
        APIWrapper.get('/api/auth/register/confirm')
            .then((res: any) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
}

export function ValidateCorfirmCode(code: string, url:number) {
    return new Promise((resolve, reject) => {
        APIWrapper.post('/api/auth/register/confirm', {code, url})
            .then((res: any) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    })
}

export function Register(payload: RegisterPayload) {
    return new Promise((resolve, reject) => {
        APIWrapper.post('/api/auth/register/', payload)
            .then((res: any) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    })
};