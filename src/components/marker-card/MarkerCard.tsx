import React, { useState } from 'react';
import MarkerForm from '../marker-form/MarkerForm';
import { Button, Card, ButtonToolbar } from 'react-bootstrap';
import { useStateValue } from '../../state';
import { EditMarkerAction, DeleteMarkerAction, SetCenterAction } from '../../state/actions';
import { IMarker } from '../../models/marker';
import './MarkerCard.css';

const MarkerCard = (props: any) => {
  const { marker } = props;

  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useStateValue();

  const handleClose = (payload: IMarker) => {
    setShowModal(false);
    if (payload) {
      dispatch(EditMarkerAction(payload));
      dispatch(SetCenterAction({ lat: payload.lat, lng: payload.lng }));
    }
  }

  const handleDelete = () => {
    const conf = window.confirm('Are you sure to delete?');
    if (conf) {
      dispatch(DeleteMarkerAction(marker));
    }
  }

  return (
    <Card className="marker-card">
      <Card.Header>{marker.label}</Card.Header>
      <Card.Body>
        <Card.Text>Latitude: {marker.lat}</Card.Text>
        <Card.Text>Longitude: {marker.lng}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonToolbar>
          <Button variant="primary" onClick={() => setShowModal(true)}>Edit</Button>
          <Button variant="primary" className="delete-button" onClick={handleDelete}>Delete</Button>
        </ButtonToolbar>
      </Card.Footer>
      <MarkerForm show={showModal} onClose={(data: IMarker) => handleClose(data)} marker={marker} />
    </Card>
  );
};

export default MarkerCard;