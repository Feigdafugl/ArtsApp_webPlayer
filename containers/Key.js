/**
 * @file Key.js
 * @author Kjetil Fossheim
 *
 * In this screen the identification process in the app happens. It makes and maintains the list of choices the user can take.
 * Ads and removes choices no longer viable.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as color from '../lib/colors'
import SwipeableViews from 'react-swipeable-views';
import {Button,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,  Icon, BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import BugReport from '@material-ui/icons/BugReport';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactList from 'react-list';
import ExWrap from '../components/ExWrap'


// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as keyAction from '../actions/keyactions';

const mapStateToProps = (state) => ({
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
    };
  };


  arraysIdentical(a, b) {
    let i = a.length;
    if (i != b.length) return false;
    while (i--) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  /**
   * resets the keyExtractor
   * @see KeyAction.resetKey
   */
  resetKey = () => {
    this.props.actions.resetKey();
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



  renderItem(index, key) {
    var trait = this.props.activeKey.content.trait[key];
    return (
      <div key={key} style={{padding:5}}>
        <ExpansionPanel  style = {styles.lEle}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style = {styles.icon}/>}>
            <h4 >{trait.traitText}</h4>
          </ExpansionPanelSummary>
          <ExWrap
            key= {trait.traitId}
            trait= {trait}
            onChildClick = {this.onValueChange}
            noView = {false}/>
        </ExpansionPanel>
      </div>
    )
  }


  render () {
    return (
      <div style= {styles.container}>
          <SwipeableViews enableMouseEvents
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
            style = {{flex: 1}}
          >
          <ReactList
            itemRenderer={::this.renderItem}
            length={this.props.activeKey.content.trait.length}
            type='simple'
            />
          </SwipeableViews>
        <div id = "footer" style = {styles.footer}>
        <Button
          style ={styles.btn}
          variant="raised"
          onClick= {this.resetKey}>
          Reset</Button>
        </div>
      </div>
    )
  }
}

const styles = {
	container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    height: '100%'
	},
  footer: {
    backgroundColor: color.footerColor,
    width: '100%',
    display: 'flex',
    borderTop: '2px',
    borderColor: 'gray',
    borderTopStyle: 'solid',
    justifyContent: 'center',
  },
	btn: {
    margin: '0.5em',
    fontSize: '1em',
    width: '90%',
    backgroundColor: color.menuColor,
    alignSelf: 'center',
    color: color.AAIconBlue,
	},
  lEle: {
    backgroundColor: color.listEle,
    marginLeft: '0.3em',
    marginRight: '0.3em',
  },
  icon: {
    fontSize: '1.5em',
    color: color.AAIconBlue,
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Key);
