import { ActionReducerMap } from '@ngrx/store';
import * as reducers from '../app/shared/store/reducers';

export interface AppState {
  loading: reducers.LoadingState;

}

export const appReducers: ActionReducerMap<AppState> = {
  loading: reducers.isloadingReducer,

};
