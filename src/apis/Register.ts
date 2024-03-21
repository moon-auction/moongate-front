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

export function CorfirmCode(code: string) {
    return APIWrapper.post(`/api/auth/confirm`, {code});
}

export function Register(payload: RegisterPayload) {
    return APIWrapper.post('/api/auth/register', payload);
};