import React, { createContext, useContext, useReducer, Reducer } from 'react';
import { IMarker } from '../models/marker';
import { Action, ACTION_TYPES } from './actions';

export interface AppState {
  markers: IMarker[];
  center: { lat: number, lng: number };
  authToken: string;
}

export const initialState: AppState = {
  markers: [
    // {
    //   id: '1',
    //   label: 'Berlin, Germany',
    //   lat: 52.52000659999999,
    //   lng: 13.404954
    // },
    // {
    //   id: '2',
    //   label: 'Munich, Germany',
    //   lat: 48.1351253,
    //   lng: 11.5819805
    // }
  ],
  center: { lat: 52.52000659999999, lng: 13.404954 },
  authToken: 'dGVzdHVzZXI6ZG9udGtub3c='
}

const defaultDispatch: React.Dispatch<Action> = () => initialState;

export const StateContext = createContext({ state: initialState, dispatch: defaultDispatch });

export const StateProvider = ({ reducer, initialState, children }: { reducer: Reducer<AppState, Action>, initialState: AppState, children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<StateContext.Provider value={{ state, dispatch }}>
    {children}
  </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);

export const AppReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return { ...state, markers: [...action.payload] };

    case ACTION_TYPES.ADD:
      return { ...state, markers: [...state.markers, action.payload] };

    case ACTION_TYPES.EDIT: {
      const marker = action.payload;
      return { ...state, markers: state.markers.map(mkr => marker.id === mkr.id ? marker : mkr) };
    }
    case ACTION_TYPES.DELETE: {
      const marker = action.payload;
      return { ...state, markers: state.markers.filter(mkr => marker.id !== mkr.id) };
    }

    case ACTION_TYPES.SET_CENTER:
      return { ...state, center: action.payload };

    default:
      return state;
  }
};