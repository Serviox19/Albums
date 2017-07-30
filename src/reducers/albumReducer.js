import axios from 'axios';

const albums = () => {
  axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/albums')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default () => albums;
