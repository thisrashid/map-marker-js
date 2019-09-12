import React from 'react';
import './Marker.css';
import '../../images/marker.svg';

const Marker = (props: any) => {
    const { color, name } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;