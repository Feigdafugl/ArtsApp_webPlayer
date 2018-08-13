/**
 * @file App.js
 * @author Kjetil Fossheim
 *
 * Set up for the key and tab view for species list(elimList and  splist ) components. Renders the view according screen size. renders a noKey screen if key is not available.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Background from '../img/background.jpg';
import icon from '../img/ArtsApp_symbol.png'
import error from '../img/error.png'
import Key from './Key'
import * as color from '../lib/colors'
import SpListContainer from './SpListContainer'
import SwipeableViews from 'react-swipeable-views';
import {Typography, AppBar, CircularProgress, Tabs, Tab, Icon, BottomNavigation, BottomNavigationAction} from '@material-ui/core';


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
			phone: screen.width < 900,
			isLoading: true
		}

	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		if (this.props.chosenValues.length === 0) {
			this.props.actions.setKey();
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


renderLarge (){
	return (
		<section style={ stylesL.sectionStyle }>
			<div id = "header" style = {stylesL.header}>
				<img src={icon} alt="icon" style={stylesL.icon}/>
				<h1 style = {stylesL.headerText}>ArtsApp</h1>
			</div>
			{this.props.keyLoading ?
				<CircularProgress
					variant="indeterminate"
					size={70}
					value={0}
					style = {{color: color.AAIconBlue, alignSelf: 'center', position: 'fixed', top: '40vh'}}
				/> :
				!this.props.keyError ?
				<div id = "playerContainer" style={ stylesL.playercontainer}>
					<div style={ stylesL.player}>
						<Key />
					</div>
					<div style={stylesL.divider} />
					<div style={ stylesL.player}>
						<SpListContainer small = {false} history= {this.props.history}/>
					</div>
				</div>
				: this.renderNoKey()
			}
		</section>
	)
};

renderSmall() {
	return (
		<section style={ stylesS.sectionStyle }>
			<div id = "header" style = {stylesS.header}>
				<img src={icon} alt="icon" style={stylesS.icon}/>
				<h1 style = {stylesS.headerText}>ArtsApp</h1>
			</div>
			{this.props.keyLoading ?
				<CircularProgress
					variant="indeterminate"
					size={70}
					value={0}
					style = {{color: color.AAIconBlue, alignSelf: 'center', position: 'fixed', top: '40vh'}}
				/> :
				!this.props.keyError ?
				<div style={ stylesS.playerSmall}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							style = {{alignSelf: 'center'}}
							fullWidth
						>
							<Tab style = {{width: '50vw'}} label={<div style= {{fontSize: '1.5em'}}>Nøkkel</div>}/>
							<Tab style = {{width: '50vw'}} label={<div style= {{fontSize: '1.5em'}}>Arter igjen</div>} />
						</Tabs>
					</AppBar>
					<SwipeableViews enableMouseEvents
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}
					>
						<div style={ stylesS.playerSmall}>
							<Key />
						</div>
						<div style={ stylesS.playerSmall}>
							<SpListContainer small = {true} history= {this.props.history}/>
						</div>
					</SwipeableViews>
				</div>
				: this.renderNoKey()
			}
		</section>
	)
};

renderNoKey() {
	return (
		<div
			style = {stylesL.errorMS}>
			<img src={error} alt="error" style={{height: 100, marginBottom: 0}}/>
			<p>
				Nøkkelen du prøver å åpne finnes ikke, eller noe gikk galt i lastingen av den. <br/>
				Prøv igjen senere!
			</p>
		</div>
	)

}

/*
traits ={this.props.activeKey.content.trait}
splist = {this.props.activeKey.content.species}
 */
    render () {
      return (
				this.state.screenSize < 900 || this.state.phone ?
				this.renderSmall() : this.renderLarge()
      )
  	}


}

const stylesS = {
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
		backgroundColor: color.bacgroundC,
		height: '10vh',
		flexDirection: 'row',
		width: '99vw',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	headerText: {
		color: color.headerText,
	},
	playerSmall: {
		backgroundColor: color.bacgroundC,
		width: '99vw',
		flex: 1,
		height: '83vh',
		paddingTop: '0.3em',
		margin: 'auto',
	},
	sectionStyle: {
		display: 'flex',
		flexDirection: 'column',
		width: 'auto',
		height: '100vh',
		fontSize: '1.3em',
		fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
	}
}

const stylesL = {
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
		color: color.headerText,
	},
	player: {
		backgroundColor: color.bacgroundC,
		width: '25em',
		height: '80vh',
		paddingTop: '0.3em',
		margin: 'auto',
	},
	playerSmall: {
		backgroundColor: color.bacgroundC,
		width: '80vw',
		height: '70vh',
		paddingTop: '0.3em',
		margin: 'auto',
	},
	divider: {
		alignSelf: 'center',
		width: '2em',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	errorMS: {
		color: color.AAIconBlue,
		alignSelf: 'center',
		padding: '1em',
		margin: '1em',
		position: 'fixed',
		top: '30vh',
		width: 'auto',
		textAlign: 'center',
		backgroundColor: 'rgb(244, 244, 244)',
		borderStyle: 'groove',
		borderWidth: 1,
		borderColor: '#9a9a9a',
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
