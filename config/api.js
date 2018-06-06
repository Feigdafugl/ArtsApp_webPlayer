import keyTemp from '../lib/key';

const request = require('superagent');
const API = 'https://artsapp.uib.no/api/v1/keys/get/'

export function getKeyFromApi(key) {
  console.log(API + key);


  request
  .get(API + key)
  .withCredentials()
  .accept('json')
  .then((res) => {
    console.log(res);
  })
  .catch(error => {
  //Do something with the error
  });

  return new Promise((resolve, reject) => {
    resolve(keyTemp.lovtre)
  });
}
