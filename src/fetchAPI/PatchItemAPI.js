import * as type from './../constants';

export default function callAPi(param) {
      return new Promise((resolve, reject) => {
         const url = `http://localhost:3001/${type.DAY_TO_GET_API}/${param.id}`;
         fetch(url, {
             method: "PATCH",
             headers:{
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify({phoneCase:param.phoneCase})
         })
             .then(response => response.json())
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err)
             })
         })
 }
 