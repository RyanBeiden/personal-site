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
      resolve(allTech.sort((a, b) => {
        if (a.percentage < b.percentage) {
          return 1;
        }

        if (b.percentage < a.percentage) {
          return -1;
        }

        return 0;
      }));
    })
    .catch((err) => reject(err));
});

export default { getTech };
