import axios from 'axios';
import { GET_ALBUMS } from './types';

export const getAlbums = () => {
  return (dispatch) => {
    axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/albums')
      .then(response => {
        dispatch({ type: GET_ALBUMS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
