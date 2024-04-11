import APIWrapper from "./APIWrapper";
import URL from './urls';

export async function GetTopPost() {
    return APIWrapper.get(URL.GetTopPost)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
};