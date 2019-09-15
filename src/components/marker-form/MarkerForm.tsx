import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './MarkerForm.css';

const URL = `${process.env.REACT_APP_GOOGLE_GEOCODE_URL}?key=${process.env.REACT_APP_GM_API_KEY}&address=`;

const STATUS = {
  OK: 'OK',
  ZERO_RESULTS: 'ZERO_RESULTS'
}

const MarkerForm = (props: any) => {
  const { marker, show, onClose } = props;
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(URL);
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  if (!address && marker && marker.label) {
    setAddress(marker.label);
  } 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (event) {
      setUrl(`${URL}${address}`);
      setQuery(address);
    } else {
      onClose(null);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);

      const { status, results } = await result.json();

      if (status === STATUS.OK) {
        setMessage('');
        setAddress('');
        onClose({
          label: results[0].formatted_address,
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng,
          id: marker ? marker.id : undefined
        });
      } else if(status === STATUS.ZERO_RESULTS) {
        setMessage('No results');
      } else {
        setMessage('Unexpected error occured');
      }
    };

    if (query) {
      setQuery('');
      fetchData();
    }
  }, [query, url, marker, onClose]);

  return (
    <Modal show={show} onHide={() => onClose(null)}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Marker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="address">
            <Form.Label>Search map</Form.Label>
            <Form.Control
              name="address"
              type="text"
              value={address}
              placeholder="Please enter any address"
              onChange={(e: any) => setAddress(e.target.value)}
            />
            <div className="error">
              {message}
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose(null)}>
            Close
          </Button>
          <Button type="submit" variant="primary" disabled={!address}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MarkerForm;