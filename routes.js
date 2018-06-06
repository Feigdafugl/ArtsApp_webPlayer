import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './containers/App';
import Modal from './containers/Modal'

import { createHashHistory } from 'history'

const history = createHashHistory()



class ModalSwitch extends React.Component {

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
				<Switch>
				  <Route path='/:key' component={App}/>
				</Switch>
        {isModal ? <Route path="/art" component={Modal} /> : null}
      </div>
    );
  }
}


export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route path='/:key' component={App}/>
			</Switch>
		</BrowserRouter>
	)
}
