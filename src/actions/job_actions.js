import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';

import { FETCH_JOBS } from './types';

export const fetchJobs = region => async dispatch => {
	let { response } = axios.get(
		`http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin&v=2&format=json`
	);
};
