import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectObjects = response.data;
      const projects = [];
      if (projectObjects) {
        Object.keys(projectObjects).forEach((projectTitle) => {
          projectObjects[projectTitle].title = projectTitle;
          projects.push(projectObjects[projectTitle]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
