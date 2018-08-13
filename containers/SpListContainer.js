/**
 * @file SpListContainer.js
 * @author Kjetil Fossheim
 *
 * A tab wrapper for the species list(elimList and  splist ) components.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import * as color from '../lib/colors'
import SwipeableViews from 'react-swipeable-views';
import {Typography, Button, Toolbar, IconButton, Dialog,AppBar, Tabs, Tab, Icon, BottomNavigation, BottomNavigationAction, Slide} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ScrollArea from 'react-scrollbar';
import SpList from './SpList'
import ElimList from './ElimList'
import Modal from './Modal'


// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as keyAction from '../actions/keyactions';

const mapStateToProps = (state) => ({
  ...state.key,
  ...state.routerReducer,
});

function mapDispatchToProps(dispatch) {
  return {
	  actions: bindActionCreators({...keyAction}, dispatch)
  };
}


class SpListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
			value: 0,
      open: false,
      screenSize: window.innerWidth,
      showSp: {},
    };
  };


  componentDidMount() {
    window.onpopstate = this.onBack
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  onClick = (species) => {
    window.history.pushState("", "", window.location +'art/' + species.latinName);
    this.setState({ open: true, showSp: species});
  }

  onBack = () =>{
    this.setState({ open: false });
  }

  Transition = (props) => {
    return <Slide direction="up" {...props} />;
  }

  handleClose = () => {
    window.history.back();
    this.setState({ open: false });
  };


  render () {
    const { fullScreen } = this.props;
    return (
      <div style= {styles.container}>
        <SwipeableViews enableMouseEvents
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <SpList onChildClick = {this.onClick}/>
          <ElimList onChildClick = {this.onClick}/>
        </SwipeableViews>
        <AppBar position="static" color={"default"} style = {styles.bar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="inherit"
            fullWidth
            style ={styles.barText}
          >
            <Tab style = {this.props.small ? {width: '50vw'} : {width: '50%'}} label={<div style= {{fontSize: '1.1em'}}>{"Arter igjen" + ": " + this.props.spLeft.length}</div>} />
            <Tab style = {this.props.small ? {width: '50vw'} : {width: '50%'}} label={<div style= {{fontSize: '1.1em'}}>{"Eliminerte arter" + ": " + (this.props.activeKey.content.species.length - this.props.spLeft.length)}</div>} />
          </Tabs>
        </AppBar>
        <Dialog
          style = {{ bottom: 10, top: 30}}
          maxWidth = {false}
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.Transition}
        >
          <Modal handleClose = {this.handleClose} showSp = {this.state.showSp}></Modal>
        </Dialog>
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
	bar: {
    alignSelf: 'flex-end',
    backgroundColor: color.footerColor,
    color: color.AAIconBlue,
    borderTop: '2px',
    borderColor: 'gray',
    borderTopStyle: 'solid',
	},
  barText: {
    alignSelf: 'center',
    color: color.AAIconBlue,
  },
  icon: {
    color: color.AAIconBlue,
  },
  split: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  splitChild: {
    flex: 1,
    height: '100%',
    width: window.innerWidth /2
  },
  iFrame: {
    display: 'block',
    width: window.innerWidth /2 -50,
    height: window.innerHeight /2,
    margin: '1em',
    boxShadow: `3px 2px 5px #888888`,
    paddingRight: '1em',
    overflowX: 'scroll',
    overflowY: 'scroll',
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SpListContainer);
