// @flow weak
/**
 * @file KeyReducer.js
 * @author Kjetil Fossheim
 */

import * as actionTypes from '../actions/actionTypes';
import strings from '../lib/LangStrings';
// Reducer
const DEFAULT_STATE = {
  strings: strings.no,
  onLogging: false,
  test: -1,
  chosenValues: [],
  activeValues: [-1],
  chosenTraits: [],
  spLeft: [],
  keyLoading: false,
  keyError: false,
  activeKey: {content: {trait: {}, species: {}}},
};


function setSPleftList(newValList, totSpList) {
  let ret = [];
  if (newValList.length === 0) {
    return {sp: totSpList, val: setActiveVal(totSpList) };
  }
  totSpList.forEach((SpEle)=>{
    let found = newValList.every((r)=> {
      return SpEle.values.includes(r);
    });
    if (found) {
      ret.push(SpEle);
    }
  });
  return {sp: ret, val: setActiveVal(ret) };
}

function setActiveVal(spList) {
  let tempL = [];
  spList.forEach((e) => {
    tempL = tempL.concat(e.values);
  });
  return Array.from(new Set(tempL));
}


/*
#########################
 */
export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
  case actionTypes.RESET:
    return {...state,
      spLeft: state.activeKey.content.species,
      activeValues: setActiveVal(state.activeKey.content.species),
      chosenValues: [],
      chosenTraits: [],
    };
  case `${actionTypes.SET_KEY}_LOADING`:
    return{...state,
      keyLoading: true,
    };
  case `${actionTypes.SET_KEY}_SUCCESS`:
    return{...state,
      activeKey: action.payload,
      spLeft: action.payload.content.species,
      activeValues: setActiveVal(action.payload.content.species),
      chosenValues: [],
      chosenTraits: [],
      keyLoading: false,
    };
  case `${actionTypes.SET_KEY}_ERROR`:
    return{...state,
      keyError: true,
      keyLoading: false,
    };
  case actionTypes.CLOSE_MENU:
    return{...state,
      menuOpen: false,
    };
  case actionTypes.CHANGE_VALUE:
    return {...state,
      chosenValues: action.newValuelist,
      chosenTraits: action.newTraitList,
      spLeft: action.spLeft,
      activeValues: action.activeValues,
    };
  default:
    return state;
  }
}
