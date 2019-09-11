import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GM_API_KEY}&address=`;

const MarkerForm = (props: any) => {
  const { marker, show, onClose } = props;
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(URL);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (event) {debugger
      const address = event.target.address.value;
      setUrl(`${URL}${address}`);
      setQuery(address);
    } else {
      onClose(null);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);

      const data = await result.json();

      onClose({
        data: data.results,
        label: data.results[0].formatted_address,
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
        id: marker ? marker.id : Date.now()
      });
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search map</Form.Label>
            <Form.Control name="address" type="text" placeholder="Please enter any address" defaultValue={marker ? marker.label : ''} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose(null)}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MarkerForm;