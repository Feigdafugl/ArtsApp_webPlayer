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
  disabledTraits: [],
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

/**
 * in use but has no meaning to the app, to be removed
 * @return {bool} true = disable false = not disable
 */
function disableTrait (activeValues, traitValues) {
  let n = 0;
  for (let i = 0; i < traitValues.length; i++) {
    if (!activeValues.includes(traitValues[i].valueId)) {
      n = n + 1;
    }
  }
  if(n === traitValues.length) {
    return true;
  }
  return false;
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
      disabledTraits: [],
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
  var temptraits = [];
    if (action.spLeft.length !== 0) {
        temptraits = state.activeKey.content.trait.filter((e, i)=>{
            return disableTrait(action.activeValues, state.activeKey.content.trait[i].values)
        })
    }
    return {...state,
      chosenValues: action.newValuelist,
      chosenTraits: action.newTraitList,
      spLeft: action.spLeft,
      activeValues: action.activeValues,
      disabledTraits: temptraits.map((i)=> i.traitId),
    };
  default:
    return state;
  }
}
