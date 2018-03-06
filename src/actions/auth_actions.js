import { AsyncStorage } from 'react-native';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

//AsyncStorage.setItem('fb_token', token);

//AsyncStorage.getItem('fb_token')

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		//Dispatch an action saying FB login is done
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		// Start up FB Login process
		doFacebookLogin(dispatch);
	}
};

const doFacebookLogin = async dispatch => {
	let { type, token } = await Facebook.logInWithReadPermissionsAsync(
		'372454123222845',
		{
			permissions: ['public_profile']
		}
	);

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
// IDENTICAL TO THIS
// export const facebookLogin = () => {
// 	return async function(dispatch) {
// 		let token = await AsyncStorage.getItem('fb_token');
// 		if (token) {
// 			//Dispatch an action saying FB login is done
// 		} else {
// 			// Start up FB Login process
// 		}
// 	};
// };
