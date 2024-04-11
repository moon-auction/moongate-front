import APIWrapper from "./APIWrapper";
import URL from './urls';

type LoginPayload = {
  email: string;
  password: string;
};

export async function LoginAPI(payload: LoginPayload) {
  return new Promise((resolve, reject) => {
    APIWrapper.post(URL.LoginAPI, payload, {withCredentials: true})
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          console.log(err);
          reject(err);
      })
  });
};

export async function UserInfoAPI() {
  return new Promise((resolve, reject) => {
    APIWrapper.get(URL.UserInfoAPI, {withCredentials: true})
      .then((res) => {
          resolve(res);
      })
      .catch((err) => {
          console.log(err);
          reject(err);
      })
  });
}

export async function LogoutAPI() {
  return APIWrapper.get(URL.LogoutAPI)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
};