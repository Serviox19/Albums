import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AlbumView from './scenes/Albums';
import MoviesView from './scenes/Movies';

const RouterComponent = () => { // eslint-disable-line
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene key="albums" component={AlbumView} title="Albums" />
        <Scene key="movies" component={MoviesView} title="Movies" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
