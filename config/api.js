import keyTemp from '../lib/key';

const request = require('superagent');
const API = 'https://artsapp.uib.no/api/v2/keys/get/'

export function getKeyFromApi(key) {
  if (!key) key = getParameterByName('key');
return new Promise((resolve, reject) => {
    request
    .get(API + key)
    .then((response) => {
      keyJSONParser(JSON.parse(response.text)[key]).then((retJSON) => {
        resolve(retJSON);
      })
    })
    .catch(error => {
      console.log('error', error);
      reject();
    //Do something with the error
    });
  });
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/**
 * JSON parser for single Key with content
 * @param {object} keyJsonString object of key data from api
 * @return {Promise}
 */
function keyJSONParser(keyJsonString) {
  return new Promise ((resolve, reject) =>{
    let r = {
      id: (typeof keyJsonString.level === 'undefined' ? null : keyJsonString.keyId),
      title: (typeof keyJsonString.level === 'undefined' ? null : keyJsonString.name ),
      description: (typeof keyJsonString.level === 'undefined' ? null : keyJsonString.keyInfo ),
      keyStatus: (typeof keyJsonString.level === 'undefined' ? null : keyJsonString.keyStatus ),
      level: (typeof keyJsonString.level === 'undefined' ? null : keyJsonString.level ),
      author: (typeof keyJsonString.author === 'undefined' ? null : keyJsonString.author ),
      version: (typeof keyJsonString.author === 'undefined' ? null : keyJsonString.version ),
      keyWeb: (typeof keyJsonString.author === 'undefined' ? null : keyJsonString.keyWeb ),
      icon: (typeof keyJsonString.keyImage === 'undefined' ? null : keyJsonString.keyImage ),
      keyImageInfo: (typeof keyJsonString.keyImageInfo === 'undefined' ? null : keyJsonString.keyImageInfo ),
      content: {
        trait: keyJsonString.content.trait,
        traitEliminate: (typeof keyJsonString.content.traitEliminate === 'undefined' ? [] : keyJsonString.content.traitEliminate ),
        traitHasSpecies: (typeof keyJsonString.content.traitHasSpecies === 'undefined' ? [] : keyJsonString.content.traitHasSpecies ),
        species: (typeof keyJsonString.content.species === 'undefined' || keyJsonString.content.species === null ? [] :
          keyJsonString.content.species.map((ele, index) => {
            return {
              speciesId: ele.speciesId,
              keyId: ele.keyId,
              latinName: ele.latinName,
              localName: ele.localName,
              speciesText: ele.speciesText,
              order: ele.order,
              family: ele.family,
              specialKey: ele.specialKey,
              distributionLocal: ele.distributionLocal,
              distributionCountry: ele.distributionCountry,
              values: (typeof ele.values === 'undefined' || ele.values === null ? [] : ele.values),
              images: (typeof ele.images === 'undefined' || ele.images === null ? [] : ele.images),
              webPage: ele.webPage,
            };
          })
        ),
        trait: (typeof keyJsonString.content.trait === 'undefined' || keyJsonString.content.trait === null ? [] :
          keyJsonString.content.trait.map((ele, index) => {
            return {
              important: ele.important,
              keyId: ele.keyId,
              traitId: ele.traitId,
              traitSpecies: ele.traitSpecies,
              traitText: ele.traitText,
              values: ele.values.map((vel, index) => {
                return {
                  valueText: vel.valueText,
                  valueInfo: vel.valueInfo,
                  valueId: vel.valueId,
                  traitId: vel.traitId,
                  keyId: vel.keyId,
                  images: (typeof vel.images === 'undefined' || vel.images === null ? [] : vel.images),
                };
              })
            };
          })
        ),
      }
    };
    resolve(r);
  });
}
