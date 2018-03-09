import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(thunk, logger), autoRehydrate())
);

persistStore(store, { storage: AsyncStorage, whitelist: ['likes'] });

export default store;
