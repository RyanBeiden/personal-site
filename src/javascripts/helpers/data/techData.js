import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tech.json`)
    .then((response) => {
      const techObjects = response.data;
      const allTech = [];
      if (techObjects) {
        Object.keys(techObjects).forEach((tech) => {
          techObjects[tech].id = tech;
          allTech.push(techObjects[tech]);
        });
      }
      resolve(allTech);
    })
    .catch((err) => reject(err));
});

export default { getTech };
