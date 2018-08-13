 /**
  * @file keyactions.js
  * @author Kjetil Fosssheim
  *
  * redux actions for key logic
  */

import * as actionTypes from './actionTypes';
import * as api from '../config/api';

export function setKey(key) {
  return {
    type: actionTypes.SET_KEY,
    payload: api.getKeyFromApi(key),
  };
}

export function changeValues(newValList, tempTraitList, spObj) {
  return {
    type: actionTypes.CHANGE_VALUE,
    newValuelist: newValList,
    newTraitList: tempTraitList,
    spLeft: spObj[0],
    activeValues: spObj[1],
  };
}

export function resetKey() {

  return {
    type: actionTypes.RESET,
  };
}
