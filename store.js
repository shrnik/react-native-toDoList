import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate, purgeStoredState } from 'redux-persist';

import rootreducer from './src/reducers'

const store = createStore(
  rootreducer,
  undefined,
  autoRehydrate()
  );

persistStore(store, {storage: AsyncStorage});
//purgeStoredState({storage: AsyncStorage})  // Clear persistStore

export default store;