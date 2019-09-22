import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';
import preloadedState from './preloadedState';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['articles'],
};

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const enhancers = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(enhancers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return createStore(persistedReducer, preloadedState, composedEnhancers);
};
export const store = configureStore();

export const persistor = persistStore(store);
