import { IMarker } from "../models/marker";
import { Action, AddMarkerAction, SetCenterAction, DeleteMarkerAction, InitMarkerAction } from "../state/actions";

export const getURL = (url: string) => `${process.env.REACT_APP_API_URL}${url}`;

export const addOrEditMarker = (marker: IMarker, authToken: string, dispatch: React.Dispatch<Action>) => {
  const method = marker.id ? 'PUT' : 'POST';

  fetch(getURL('/markers'), {
    method,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      'authorization': `Basic ${authToken}`
    },
    body: JSON.stringify(marker)
  }).then(response => response.json()).then(({ data }: any) => {
    const { _id: id, label, lat, lng } = data;

    dispatch(AddMarkerAction({ id, label, lat, lng }));
    dispatch(SetCenterAction({ lat, lng }));

    return { id, label, lat, lng };
  });
}

export const deleteMarkerService = (marker: IMarker, authToken: string, dispatch: React.Dispatch<Action>) => {
  fetch(getURL(`/markers/${marker.id}`), {
    method: 'DELETE',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      'authorization': `Basic ${authToken}`
    }
  }).then(response => response.json())
    .then(() => dispatch(DeleteMarkerAction(marker)));
}

export const searchMarkerService = (options: {[key: string]: string}, dispatch: React.Dispatch<Action>) => {
  const params: string = Object.keys(options).map((key: string) => `${key}=${options[key]}`).join('&');
  const url = params ? `/markers?${params}` : '/markers';
  fetch(getURL(url))
    .then(response => response.json())
    .then(response => dispatch(InitMarkerAction(response.data)));
}