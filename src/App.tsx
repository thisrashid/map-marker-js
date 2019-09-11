import React from 'react';
import './App.css';
import MapContainer from './components/map-container/MapContainer';
import Sidebar from './components/sidebar/Sidebar';
import { StateProvider, initialState, AppReducer } from './state';

const App: React.FC = () => (
  <div className="container-fluid App">
    <StateProvider initialState={initialState} reducer={AppReducer}>
      <MapContainer />
      <Sidebar />
    </StateProvider>
  </div>
);

export default App;