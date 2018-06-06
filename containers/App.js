import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Background from '../img/background.jpg';
import icon from '../img/ArtsApp_symbol.png'
import Key from './Key'
import * as color from '../lib/colors'
import SpListContainer from './SpListContainer'
import SwipeableViews from 'react-swipeable-views';
import {Typography, AppBar, CircularProgress, Tabs, Tab, Icon, BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import key from '../lib/key';

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

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			value: 0,
			screenSize: window.innerWidth,
			loading: true
		}

	}

	componentDidMount() {
		this.setState({isLoading: false})
		window.addEventListener("resize", this.updateDimensions);
		if (this.props.chosenValues.length === 0) {
			this.props.actions.setKey(this.props.match.params.key);
		}
	};

	componentWillUnmount() {
			window.removeEventListener("resize", this.updateDimensions);
	};

	componentWillMount() {
		this.updateDimensions();
	}

	updateDimensions = () => {
		this.setState({
			screenSize: window.innerWidth,
		})
	}

	handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

/*
traits ={this.props.activeKey.content.trait}
splist = {this.props.activeKey.content.species}
 */
    render () {
      return (
				<section style={ styles.sectionStyle }>
					<div id = "header" style = {styles.header}>
						<img src={icon} alt="icon" style={styles.icon}/>
						<h1 style = {styles.headerText}>ArtsApp</h1>
					</div>
					{this.state.isLoading ?
						<CircularProgress
							variant="indeterminate"
							size={50}
							value={0}
							style = {{alignSelf: 'center'}}
						/> :
						this.state.screenSize < 900 ?
							<div style={ styles.playerSmall}>
								<AppBar position="static" color="default" style = {{alignSelf: 'flex-end'}}>
									<Tabs
										value={this.state.value}
										onChange={this.handleChange}
										indicatorColor="primary"
										textColor="primary"
										fullWidth
									>
										<Tab label="Nøkkel" />
										<Tab label="Arter igjen" />
									</Tabs>
								</AppBar>
								<SwipeableViews enableMouseEvents
									index={this.state.value}
									onChangeIndex={this.handleChangeIndex}
								>
									<div style={ styles.player}>
										<Key />
									</div>
									<div style={ styles.player}>
										<SpListContainer history= {this.props.history}/>
									</div>
								</SwipeableViews>
							</div>

							:
						<div id = "playerContainer" style={ styles.playercontainer}>
							<div style={ styles.player}>
								<Key />
							</div>
							<div style={styles.divider} />
							<div style={ styles.player}>
								<SpListContainer history= {this.props.history}/>
							</div>
						</div>
				}
				</section>
      )
  	}


}

const styles = {
	playercontainer: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-between',
	},
	icon: {
		height: '5em',
		margin: '1em',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		color: '#fffef9',
	},
	player: {
		backgroundColor: color.AAIconBrown,
		width: '25em',
		height: '80vh',
		paddingTop: '0.3em',
		margin: 'auto',
	},
	playerSmall: {
		backgroundColor: color.AAIconBrown,
		width: '25em',
		paddingTop: '0.3em',
		margin: 'auto',
	},
	divider: {
		alignSelf: 'center',
		width: '2em',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	sectionStyle: {
		display: 'flex',
		flexDirection: 'column',
		width: 'auto',
		height: '98vh',
		resizeMode: 'cover',
		backgroundImage: `url(${Background})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
