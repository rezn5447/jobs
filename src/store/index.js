import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(thunk, logger))
);
