import APIWrapper from "./APIWrapper";
import URL from './urls';
import {Cookies} from 'react-cookie';

type LoginPayload = {
  email: string;
  password: string;
};

export async function LoginAPI(payload: LoginPayload) {
  return new Promise((resolve, reject) => {
    APIWrapper.post(URL.LoginAPI, payload)
      .then((res) => {
          const cookies = new Cookies();
          cookies.set('token', res.data.token);
          resolve(res);
      })
      .catch((err) => {
          console.log(err);
          reject(err);
      })
  });
};

export async function LogoutAPI() {
  return APIWrapper.get(URL.LogoutAPI)
    .then((res) => {
        const cookies = new Cookies();
        cookies.remove('token');
    })
    .catch((err) => {
        console.log(err);
    })
};