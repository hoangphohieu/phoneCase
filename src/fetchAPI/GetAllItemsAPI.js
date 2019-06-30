import * as type from './../constants';
export default function callAPi() {
    return new Promise((resolve, reject) => {
        let url=`http://localhost:3001/${type.DAY_TO_GET_API}`;
        fetch(url, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}