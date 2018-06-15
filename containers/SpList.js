import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as color from '../lib/colors'
import {Button,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactList from 'react-list';

import SpElement from '../components/SpElement'

// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as keyAction from '../actions/keyAction';

const mapStateToProps = (state) => ({
  ...state.key,
});

function mapDispatchToProps(dispatch) {
  return {
	  actions: bindActionCreators({}, dispatch)
  };
}

class SpList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

onClick(sp) {
  this.props.onChildClick(sp)
}

renderItem(index, key) {
  return (
    <div key={key} style={{padding:5}}>
      <ExpansionPanel style = {styles.lEle}>
        <ExpansionPanelSummary   expandIcon={<ExpandMoreIcon style = {styles.icon}/>}>
          <SpElement species = {this.props.spLeft[key]} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style= {{flexDirection: 'column'}}>
          {this.renderCilds(this.props.spLeft[key], key)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

  renderCilds (sp, key) {
      return (
        <div
          key ={key+'dd'}
          style= {styles.spD}
          >
          <Button
            style ={styles.btn}
            variant="raised"
            onClick= {() => this.onClick(sp) }
            >Utfyllende artsbeskrivelse</Button>
          <p style= {{fontSize: '1em'}}>
            {sp.speciesText}
          </p>
        </div>
      )
  }



  render () {
    return (
      <div style= {styles.container}>
          <ReactList
            itemRenderer={::this.renderItem}
            length={this.props.spLeft.length}
            type='simple'
            />
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
  spD: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContant: 'center',
  },
	btn: {
    width: '90%',
    fontSize: '1em',
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

export default connect(mapStateToProps, mapDispatchToProps)(SpList);
