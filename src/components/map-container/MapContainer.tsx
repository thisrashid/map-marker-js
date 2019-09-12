import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/Marker';
import { IMarker } from '../../models/marker';
import './MapContainer.css';
import { useStateValue } from '../../state';

const key = process.env.REACT_APP_GM_API_KEY || '';

const MapContainer = () => {
  const { state } = useStateValue();

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={state.center}
        center={state.center}
        defaultZoom={11}
      >
        {state.markers.map((marker: IMarker) => <Marker key={marker.id} {...marker} />)}
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;