import { combineReducers } from 'redux';
import authSlice from './auth/auth-slice';
import counterSlice from './contacts/contacts-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: counterSlice,
});

export default rootReducer;
