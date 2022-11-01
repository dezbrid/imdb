import Config from 'react-native-config';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '@redux/store';
import {
  ImdbObject,
  ResponseImdbTitle,
  ResponseImdbTitleDetail,
} from '@interfaces/imdb';
import {Nullable} from '@interfaces/generic';
export interface ImdbState {
  listimdb: ImdbObject[];
  loadingList: boolean;
  detailImdb: Nullable<ResponseImdbTitleDetail>;
  loadingDetail: boolean;
}

export const imdbTitleAsync = createAsyncThunk(
  'imdb/imdbTitle',
  async (title: string): Promise<ResponseImdbTitle> => {
    const response = await fetch(
      `${Config.IMDB_BASE_URL}es/API/SearchTitle/${Config.IMDB_API_KEY}/${title}`,
      {method: 'GET'},
    );
    const data = await response.json();
    return data;
  },
);
export const detailTitleByIdAsync = createAsyncThunk(
  'imdb/detailTitleById',
  async (id: string): Promise<ResponseImdbTitleDetail> => {
    const response = await fetch(
      `${Config.IMDB_BASE_URL}es/API/Title/${Config.IMDB_API_KEY}/${id}/Trailer`,
      {method: 'GET'},
    );
    const data = await response.json();
    return data;
  },
);
const initialState: ImdbState = {
  listimdb: [],
  loadingList: false,
  detailImdb: null,
  loadingDetail: false,
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
      })
      .addCase(detailTitleByIdAsync.pending, state => {
        state.loadingDetail = true;
      })
      .addCase(detailTitleByIdAsync.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.detailImdb = action.payload;
      })
      .addCase(detailTitleByIdAsync.rejected, state => {
        state.loadingDetail = false;
      });
  },
});
export const {getOriginalList} = imdbSlice.actions;
export const listImdb = (state: RootState) => state.imdb.listimdb;
export const detailImdb = (state: RootState) => state.imdb.detailImdb;

export default imdbSlice.reducer;