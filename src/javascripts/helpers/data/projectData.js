/* eslint-disable max-len */
const projects = [
  {
    title: 'Tamagotchi Web App',
    screenshot: 'https://bit.ly/2S3j4PQ',
    description: 'This project consists of four sections where you can independently change the score of each section through two buttons that will either increase or decrease the points. I used functions that increase or decrease the integer based on the button\'s click event. My favorite part is the Tamagotchi shape and the responsiveness that was achieved through absolute/relative positioning and breakpoints/media queries.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ['HTML', 'SASS', 'Vanilla JavaScript', 'Version Control'],
    available: true,
    url: 'https://github.com/RyanBeiden/firstRepo', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
    // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubURL: 'https://github.com/RyanBeiden/firstRepo',
  },
  {
    title: 'Repo 1',
    screenshot: 'https://bit.ly/2S3j4PQ',
    description: 'This is the best project ever.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ['HTML', 'SASS', 'Vanilla JavaScript', 'Version Control'],
    available: true,
    url: 'https://github.com/RyanBeiden/firstRepo', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
    // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubURL: 'https://github.com/RyanBeiden/firstRepo',
  },
];

const getProjects = () => projects;

export default { getProjects };
