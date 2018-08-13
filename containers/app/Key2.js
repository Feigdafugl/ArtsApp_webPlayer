/**
 * @file Key.js
 * @author Kjetil Fossheim
 *
 * In this screen the identification process in the app happens. It makes and maintains the list of choses the user can take.
 * Ads and removes choses no longer viable.
 */

import React, { Component } from 'react';



// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as keyAction from '../actions/keyAction';

const mapStateToProps = (state) => ({
  ...state.nav,
  ...state.menu,
  ...state.key,
});

function mapDispatchToProps(dispatch) {
  return {
	  actions: bindActionCreators({...keyAction}, dispatch)
  };
}

class Key extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: key[this.props.navigation.state.params.key],
    };
  };

  componentDidMount() {
    this.props.actions.setKey(this.props.navigation.state.params.key);
  }


  arraysIdentical(a, b) {
    let i = a.length;
    if (i != b.length) return false;
    while (i--) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  onClickMenu = () => {
    this.props.navigation.popToTop();
  }

  onClickHome = () => {
  }

  onClickSpLeft = () => {
    this.props.navigation.navigate('SpLeft');
  }

  /**
   * resets the keyExtractor
   * @see KeyAction.resetKey
   */
  resetKey = () => {
    this.props.actions.setKey(this.state.key.id === 1 ? 'lovtre' : 'bartre');
    this.setState({
      alertShown: false,
    });
  }


  onValueChange = (newValue, oldValue, trigger, trait) => {
    let tempValuelist = this.props.chosenValues;
    let tempTraitList = this.props.chosenTraits;
    if (trigger === 0) {
      tempValuelist.push(newValue);
      tempTraitList.push(trait);
      let e = this.setSPleftList(tempValuelist);
      this.props.actions.changeValues(tempValuelist, tempTraitList, e);
    }
    else if (trigger === 1) {
      tempValuelist.push(newValue);
      let i = tempValuelist.indexOf(oldValue);
      tempValuelist.splice(i, 1);
      let e = this.setSPleftList(tempValuelist);
      this.props.actions.changeValues(tempValuelist, tempTraitList, e);
    }
    else if (trigger === -1 ) {
      let i = tempValuelist.indexOf(oldValue);
      tempValuelist.splice(i, 1);
      let j = tempTraitList.indexOf(oldValue);
      tempTraitList.splice(j, 1);
      let e = this.setSPleftList(tempValuelist);
      this.props.actions.changeValues(tempValuelist, tempTraitList, e);
    }
  }

  getSections() {
    return {data: this.state.content.key.trait};

  }

  setSPleftList(newValList) {
    let ret = [];
    let spL = this.props.activeKey.content.species;
    if (newValList.length === 0) {
      return [spL, this.setActiveVal(spL)];
    }
    spL.forEach((SpEle)=>{
      let found = newValList.every((r)=> {
        return SpEle.values.includes(r);
      });
      if (found) {
        ret.push(SpEle);
      }
    });
    return [ret, this.setActiveVal(ret)];
  }

  setActiveVal(spList) {
    let tempL = [];
    spList.forEach((e) => {
      tempL = tempL.concat(e.values);
    });
    return Array.from(new Set(tempL));
  }

  renderData = ({item}) => {
    return (
          <TraitWrapper
            key= {item.traitId}
            trait= {item}
            navigation = {this.props.navigation}
            onChildClick = {this.onValueChange}
            traitTitle = {item.traitText}
            traitID = {item.traitId}
            elimlist = {item.eliminate}
            noView = {false}
            children={ item.values }/>
    );
  }

/*
<Icon style= {{color: '#623C40'}}name='ios-bug'/>
<FlatList
    renderItem={this.renderData}
    keyExtractor={(item, index) => {return 'index' + item.traitId}}
    data={this.state.key.content.trait}
  />
<Icon style= {{color: '#623C40'}} name='md-home'/>
 */
  render() {
    return(
      <div>
        <div>
          <H1 style= {{alignSelf: 'center', padding: 5, fontSize: 10, color: '#623C40'}}>trykk og hold</H1>
        </div>
          <div >
          <div style = {{backgroundColor: '#ffffff'}}>
              <button style = {{backgroundColor: '#7DAE88'}} active transparent onPress={this.onClickHome}>
              </button>
              <button  transparent onPress={this.onClickSpLeft}>
                <H2 style={{fontSize: 20, color: '#623C40'}}>{2}</H2>
              </button>
          </div>
        </div>
      </div>
    );
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Key);
