import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,  Icon, BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import ExChild from './ExChild'

// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  ...state.key,
});

function mapDispatchToProps(dispatch) {
  return {
	  actions: bindActionCreators({}, dispatch)
  };
}


class EsWrap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      groupId: props.trait.traitId,
      disable: false,
    };
  };

  /**
   * monitors props for changes if trait is disabled or key is reset
   * @param {Object} nextProps
   * @return {void}
   */
   componentWillReceiveProps(nextProps) {
    if (!this.arraysIdentical(nextProps.activeValues, this.props.activeValues)) {
      this.setState({
        disable: this.disableTrait(nextProps.activeValues),
      });
    }
    if (nextProps.chosenValues.length === 0) {
      this.setState({
        selected: -1,
      });
    }
  }

  /**
   * compares to arrays to see if they are identical.
   * @param {array} a list a for comparison
   * @param {array} b list b for comparison
   * @return {bool} true if array a and b are identical.
   */
  arraysIdentical = (a, b) => {
    let i = a.length;
    if (i != b.length) return false;
    while (i--) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };


  /**
   * manage the user change of values within the trait wrapper
   * trigger:
   * returns -1 if the earlier selected id is to be removed
   * returns 0 if there has not been a chosen id earlier
   * returns number of the old selected value to be removed
   * @param {Integer} id [description]
   * @return {void} run parent onChildClick, sends id of value, trigger, trait id
   */
  onChildClick = (id) => {
    var trigger = 0;

    if (this.state.selected === id) {
      this.setState({selected: -1});
      trigger = -1;
    }
    else if (this.state.selected === -1) {
      trigger = 0;
      this.setState({selected: id});
    }
    else {
      trigger = 1;
      this.setState({selected: id});
    }
    this.props.onChildClick(id, this.state.selected, trigger, this.state.groupId);
  }

  /**
   * in use but has no meaning to the app, to be removed
   * @return {bool} true = disable false = not disable
   */
  disableTrait = (activeValues) => {
    let n = 0;
    for (let i = 0; i < this.props.trait.values.length; i++) {
      if (!activeValues.includes(this.props.trait.values[i].valueId)) {
        n = n + 1;
      }
    }
    if(n === this.props.trait.values.length) {
      return true;
    }
    return false;
  }

  renderCilds () {
    return this.props.trait.values.map((item) => {
      return (
        <ExChild
          key={item.valueId}
          isSelected= {item.valueId === this.state.selected}
          selected = {this.state.selected !== -1}
          disabled = {this.state.disable}
          onClick={this.onChildClick}
          id={item.valueId}
          valueInfo= {item.valueInfo}
          text={item.valueText}
          images = {item.images}
          key ={item.valueId+'cc'} child = {item}/>
      )
    });
  }

  render () {
    return (
      <ExpansionPanelDetails style= {{flexDirection: 'column', }} >
      {this.renderCilds()}
      </ExpansionPanelDetails>
    )
  }


}

export default connect(mapStateToProps, mapDispatchToProps) (EsWrap);
