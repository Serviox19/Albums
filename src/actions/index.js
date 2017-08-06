import axios from 'axios';
import { GET_ALBUMS } from './types';

export const albumsFetch = () => {
  return (dispatch) => {
    axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/albums')
      .then(response => {
        const data = response.data;
        dispatch({ type: GET_ALBUMS, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
