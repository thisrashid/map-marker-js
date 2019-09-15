import { IMarker } from "../models/marker";

export type Action = {
  type: string;
  payload?: any;
}

export const ACTION_TYPES = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  INIT: 'INIT',
  SET_CENTER: 'SET_CENTER'
}

export const InitMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.INIT,
  payload
});

export const AddMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.ADD,
  payload
});

export const EditMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.EDIT,
  payload
});

export const DeleteMarkerAction = (payload: IMarker) => ({
  type: ACTION_TYPES.DELETE,
  payload
});

export const SetCenterAction = (payload: any) => ({
  type: ACTION_TYPES.SET_CENTER,
  payload
});
