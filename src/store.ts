import { configureStore, ThunkAction, Action, combineReducers, ThunkDispatch } from '@reduxjs/toolkit';
import worksReducer from './features/works';

const rootReducer = combineReducers({
  works: worksReducer,
  // Add other reducers if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer,
});

export default store; // Export the store instance