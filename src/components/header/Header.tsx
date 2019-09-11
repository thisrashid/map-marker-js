import React, { useState } from 'react';
import MarkerForm from '../marker-form/MarkerForm';
import { IMarker } from '../../models/marker';
import { useStateValue } from '../../state';
import { Button } from 'react-bootstrap';
import { AddMarkerAction, SetCenterAction } from '../../state/actions';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useStateValue();

  const handleClose = (payload: IMarker) => {
    setShowModal(false);
    if(payload) {
      dispatch(AddMarkerAction(payload));
      dispatch(SetCenterAction({lat: payload.lat, lng: payload.lng}));
    }
  }
  return (
    <header>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add Marker</Button>
      <MarkerForm show={showModal} onClose={(data: IMarker) => handleClose(data)}/>
    </header>
  );
};

export default Header;