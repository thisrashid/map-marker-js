import React, { useState } from 'react';
import MarkerForm from '../marker-form/MarkerForm';
import { IMarker } from '../../models/marker';
import { useStateValue } from '../../state';
import { Button } from 'react-bootstrap';
import './Header.css';
import { addOrEditMarker } from '../../services/marker.service';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { state: { authToken }, dispatch } = useStateValue();

  const handleClose = (payload: IMarker) => {
    setShowModal(false);
    if(payload) {
      addOrEditMarker(payload, authToken, dispatch);
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