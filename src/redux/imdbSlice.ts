import Config from 'react-native-config';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '@redux/store';
import {ImdbObject, ResponseImdbTitle} from '@interfaces/imdb';
export interface ImdbState {
  listimdb: ImdbObject[];
  loadingList: boolean;
}

export const imdbTitleAsync = createAsyncThunk(
  'imdb',
  async (title: string): Promise<ResponseImdbTitle> => {
    const response = await fetch(
      `${Config.IMDB_BASE_URL}en/API/SearchTitle/${Config.IMDB_API_KEY}/${title}`,
      {method: 'GET'},
    );
    const data = await response.json();
    return data;
  },
);
const initialState: ImdbState = {
  listimdb: [],
  loadingList: false,
};
export const imdbSlice = createSlice({
  name: 'imdb',
  initialState,
  reducers: {
    getOriginalList: state => {
      state.listimdb = state.listimdb;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(imdbTitleAsync.pending, state => {
        state.loadingList = true;
      })
      .addCase(imdbTitleAsync.fulfilled, (state, action) => {
        state.loadingList = false;
        state.listimdb = action.payload.results;
      })
      .addCase(imdbTitleAsync.rejected, state => {
        state.loadingList = false;
      });
  },
});
export const {getOriginalList} = imdbSlice.actions;
export const listimdb = (state: RootState) => state.imdb.listimdb;

export default imdbSlice.reducer;
