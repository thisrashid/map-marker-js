import React from 'react';
import { IMarker } from '../../models/marker';
import MarkerCard from '../marker-card/MarkerCard';
import { useStateValue } from '../../state';
import './MarkerList.css';

const MarkerList = () => {
  const { state } = useStateValue();

  return (
    <div className="marker-list">
      {state.markers.map((marker: IMarker) => <MarkerCard key={marker.id} marker={marker}/>)}
    </div>
  );
}

export default MarkerList;