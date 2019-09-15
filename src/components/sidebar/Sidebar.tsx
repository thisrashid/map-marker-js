import React, { useEffect } from 'react';
import './Sidebar.css';
import Header from '../header/Header';
import MarkerList from '../marker-list/MarkerList';
import { searchMarkerService } from '../../services/marker.service';
import { useStateValue } from '../../state';

const Sidebar = () => {
  const { dispatch } = useStateValue();
  useEffect(() => {
    searchMarkerService({}, dispatch);
  }, [dispatch]);
  
  return (
    <div className="sidebar">
      <Header />
      <MarkerList />
    </div>
  );
};

export default Sidebar;