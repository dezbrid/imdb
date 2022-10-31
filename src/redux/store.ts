import {
  configureStore,
  ThunkAction,
  Action,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import ReactotronConfig from '@config/reactotronConfig';
import imdbSlice from '@redux/imdbSlice';

const enhancers: StoreEnhancer[] = [];
if (ReactotronConfig.createEnhancer) {
  enhancers.push(ReactotronConfig.createEnhancer());
}

export const store = configureStore({
  reducer: {
    imdb: imdbSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
