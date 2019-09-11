export type Action = {
  type: string;
  payload?: any;
}

export const ACTION_TYPES = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  SET_CENTER: 'SET_CENTER'
}

export const AddMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.ADD,
  payload
});

export const EditMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.EDIT,
  payload
});

export const DeleteMarkerAction = (payload: any) => ({
  type: ACTION_TYPES.DELETE,
  payload
});

export const SetCenterAction = (payload: any) => ({
  type: ACTION_TYPES.SET_CENTER,
  payload
});
