import React, {PropTypes} from 'react';
import {Divider, Button} from '@material-ui/core';
import resImg from '../img/ArtsApp_symbol075.png';


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

class ExChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isActive: props.activeValues.includes(props.id),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.arraysIdentical(nextProps.activeValues, this.props.activeValues)) {
    }
    else {
      this.setState({
        isActive: nextProps.activeValues.includes(nextProps.id),
      });
    }

  };


  componentDidMount() {
    if (typeof this.props.images[0] !== 'undefined') {
      this.setState({
        images: this.props.images,
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

  onClick = () => {
    if (this.state.isActive || this.props.selected) {
      this.props.onClick(this.props.id);
    }
    //  this.props.onClick(this.props.id);
  };


  render() {
    return (
      <div style={ this.props.isSelected ? styles.selected : (this.state.isActive ? styles.unSelected : (this.props.selected ? styles.inActivWithSel : styles.inActiv))}>
        <Button key = {this.props.child.valueText} style={styles.btn} onClick={this.onClick} >
          <div style={{ height: '5em', width: '5em', marginRight: '1.5em'}}>
            {
            this.props.child.images.length !== 0 ?
              <img src={this.props.child.images[0]} alt="mario" onError={(e)=>{e.target.src=resImg}} style={{ maxWidth:'5em', maxHeight:'5em', height: 'auto', width: 'auto' }}/>
            :
              <div></div>
            }
          </div>
          <h4>{this.props.child.valueText}</h4>
        </Button>
      </div>
    );
  }
}

const styles = {
  selected: {
    backgroundColor: '#FFEDCC',
    marginBottom:'1em',
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: '#9a9a9a',
  },
  unSelected: {
    backgroundColor: '#F5FCFF',
    marginBottom:'1em',
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: '#9a9a9a',
  },
  inActiv: {
    backgroundColor: 'rgba(139, 139, 139, 0.23)',
    marginBottom:'1em',
    opacity: 0.5,
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: '#9a9a9a',
  },
  inActivWithSel: {
    backgroundColor: 'rgba(238, 222, 222, 0.4)',
    marginBottom:'1em',
    opacity: 0.5,
    borderStyle: 'groove',
    borderWidth: 1,
    borderColor: '#9a9a9a',
  },
  btn: {
    display: 'flex',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ExChild)
