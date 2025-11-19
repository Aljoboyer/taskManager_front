import {combineReducers} from '@reduxjs/toolkit';
import { api } from './api/api';

export const rootReducer = combineReducers({
  // commonstore: commonSliceReducer,
  [api.reducerPath]: api.reducer,
});
