/**
 * @file SpElement.js
 * @author Kjetil Fossheim
 *
 * List element for species in the species lists in SpList.js
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {} from '@material-ui/core';
import resImg from '../img/ArtsApp_symbol075.png';


class SpElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };


  render () {
    return (
      <div style= {{display: 'flex', flexDirection: 'row', alignContent: 'center',  height: '100%'}}>
        <div style={{ height: '6em', width: '6em', marginRight: '1.5em'}}>
          {
          this.props.species.images.length !== 0 ?
            <img src={this.props.species.images[0]} alt="mario" onError={(e)=>{e.target.src=resImg}} style={{ height: '6em', width: '6em'}}/>
          :
            <div></div>
          }
        </div>
      <div>
          <h3 style = {{marginBottom: 'auto'}}>{this.props.species.latinName}</h3>
          <h4 style = {{marginTop: 'auto'}}>{this.props.species.localName}</h4>
        </div>
      </div>
    )
  }


}

export default SpElement;
