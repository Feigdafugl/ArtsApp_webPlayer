
/**
 * @file Key.js
 * @author Kjetil Fossheim
 *
 * modal showing more filling information about a species.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import * as color from '../lib/colors'
import SwipeableViews from 'react-swipeable-views';
import {Typography, Button, Toolbar, IconButton, GridList, GridListTile, GridListTileBar, Dialog,AppBar, Tabs, Tab, Icon, BottomNavigation, BottomNavigationAction, Slide} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';
import ScrollArea from 'react-scrollbar';
import SpList from './SpList'
import ReactTooltip from 'react-tooltip'
import ElimList from './ElimList'
import resImg from '../img/ArtsApp_symbol075.png';

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


class SpListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
			value: 0,
      open: true,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showSp: props.showSp,
      selImg: props.showSp.images[0],
    };
  };
  componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	};

	componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions);
	};

  updateDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeightn
    })
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };


  Transition = (props) => {
    return <Slide direction="up" {...props} />;
  }

  handleClose = () => {
    this.props.handleClose();
    this.setState({ open: false });
  };

  handleClosModal = () => {
    this.props.history.goBack();
    this.setState({ open: false });
  };

  onImgClick(img){
    this.setState({
      selImg: img,
    });
  }

  renderSpecies = () => {
    return (
      <div style = {Object.assign({width: this.state.screenWidth /2}, styles.splitChild)}>
        <a  data-tip="React-tooltip" style = {{}} href={this.state.selImg} target="_blank">
          <img src={this.state.showSp.images.length !== 0 ? this.state.selImg : resImg} onError={(e)=>{e.target.src=resImg}} alt="resImg" style={{ height: '20em', margin: '1em' }}/>
          <ReactTooltip place="top" type="light" effect="float">
            <span>Trykk for å åpne i ny fane.</span>
          </ReactTooltip>
      </a>
        {this.state.showSp.images.length !== 0 &&
          <div style={styles.images}>
              {this.state.showSp.images.map(img => (
                <Button
                  key={ img + ''}
                  onClick = {this.onImgClick.bind(this, img)}
                  style = {this.state.selImg === img ? {backgroundColor: 'rgba(154, 154, 154, 0.15)',} : {}}>
                <img src={img} onError={(e)=>{e.target.src=resImg}} alt="resImg" style={styles.img}/>
                </Button>
              ))}
          </div>
        }
        <h2 style = {{marginBottom: 'auto'}}>{this.state.showSp.latinName + '  (' + this.state.showSp.localName + ')'}</h2>
        <p>{this.state.showSp.speciesText}</p>
      </div>
    )
  }

  renderDialog = () => {
    return (
      <div style ={{ width: (this.state.showSp.webPage === ''? 'auto' : (window.innerWidth < 800 ? 'auto' : this.state.screenWidth -100)), height: this.state.screenHeight -100, fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]}}>
        <AppBar position="static" >
          <Toolbar style = {{paddingLeft: 0}}>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon style = {{fontSize: '1.5em'}}/>
            </IconButton>
            <Typography variant="display1" style = {{marginLeft: '2em'}} color="inherit">{this.state.showSp.latinName + '  (' + this.state.showSp.localName + ')'}</Typography>
          </Toolbar>
        </AppBar>
        <div style = {styles.split}>
          {this.renderSpecies()}
          {window.innerWidth < 800  || this.state.showSp.webPage === '' ?
            null
            :
            <div style = {styles.splitChild}>
              <div >
                <iframe src={this.state.showSp.webPage} title="søk" scrolling="yes" style= {Object.assign( {width: this.state.screenWidth /2 -50, height: this.state.screenHeight /2,},styles.iFrame)}>
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  render () {
    return (
      this.renderDialog()
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
    color: color.AAIconBlue,
	},
  barText: {
    color: color.AAIconBlue,
  },
  icon: {
    fontSize: '1em',
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
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  },
  iFrame: {
    display: 'block',
    margin: '1em',
    boxShadow: `3px 2px 5px #888888`,
    paddingRight: '1em',
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
  images: {
    display: 'flex',
    width: '80%',
    padding: '0.5em',
    justifyContent: 'space-around',
    overflow: 'overlay',
    backgroundColor: 'rgba(154, 154, 154, 0.15)',
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: '#9a9a9a',
  },
  img: {
    height: '6em',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: '0.5em',
    borderColor: '#9a9a9a',
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SpListContainer);
