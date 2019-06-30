import * as type from './../constants';
export default function callAPi(param) {
      return new Promise((resolve, reject) => {
          const url = `http://localhost:3001/${type.DAY_TO_GET_API}`;
          fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(param)
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
  