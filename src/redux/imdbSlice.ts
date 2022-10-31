import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@redux/store';
import {ImbdObject} from '@interfaces/imbd';

export interface ImdbState {
  listImbd: ImbdObject[];
  loadingList: boolean;
  imbds: ImbdObject[];
}

const initialState: ImdbState = {
  listImbd: [],
  loadingList: false,
  imbds: [],
};
export const imdbSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    getOriginalList: state => {
      state.imbds = state.listImbd;
    },
  },
});
export const {getOriginalList} = imdbSlice.actions;
export const listImbd = (state: RootState) => state.imdb.imbds;
export const orignialListImbd = (state: RootState) => state.imdb.listImbd;

export default imdbSlice.reducer;
