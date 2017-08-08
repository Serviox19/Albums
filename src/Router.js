import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AlbumView from './scenes/AlbumScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={AlbumView} title="Albums" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
