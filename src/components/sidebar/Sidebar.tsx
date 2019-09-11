import React from 'react';
import './Sidebar.css';
import Header from '../header/Header';
import MarkerList from '../marker-list/MarkerList';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header />
      <MarkerList />
    </div>
  );
};

export default Sidebar;