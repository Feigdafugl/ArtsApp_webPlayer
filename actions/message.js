import { SET_MESSAGE } from './actionTypes';

export const setMessage = (message) => {

	return dispatch => {

		dispatch({
			type: SET_MESSAGE,
			payload: {
				message
			}
		})

	}

}
