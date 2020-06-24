/* eslint-disable max-len */
const projects = [
  {
    title: 'Tamagotchi Web App',
    screenshot: '../../../src/assets/tamagotchi-demo.jpg',
    description: 'This project consists of four sections where you can independently change the score of each section through two buttons that will either increase or decrease the points. I used functions that increase or decrease the integer based on the button\'s click event. My favorite part is the Tamagotchi shape and the responsiveness that was achieved through absolute/relative positioning and breakpoints/media queries.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ['HTML', 'SASS', 'Vanilla JavaScript'],
    available: true,
    url: 'https://github.com/RyanBeiden/tamagotchi', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
    // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubURL: 'https://github.com/RyanBeiden/tamagotchi',
  },
  {
    title: 'Bear Watcher Web App',
    screenshot: '../../../src/assets/bear-watcher-demo.jpg',
    description: 'This project is a basic form where you can add the name and image URL of a bear that will be added to a Brooks River section. Once a new bear is added, you can select if the bear attempted to catch a fish in the river, and then if they successfully caught the fish! There is a counter displaying the total number of fish caught as well as timestamps for each attempt and catch. I used Bootstrap forms timestamps all based on clicks of different buttons. My favorite addition is you cannot have more catches than attempts.',
    technologiesUsed: ['CSS', 'JavaScript', 'ES6 Modules'],
    available: true,
    url: 'https://github.com/RyanBeiden/bear-watcher',
    githubURL: 'https://github.com/RyanBeiden/bear-watcher',
  },
  {
    title: 'Test 1',
    screenshot: 'https://bit.ly/2S3j4PQ',
    description: 'This is the best project ever.',
    technologiesUsed: ['HTML', 'SASS', 'JavaScript', 'Version Control'],
    available: true,
    url: 'https://github.com/RyanBeiden',
    githubURL: 'https://github.com/RyanBeiden',
  },
  {
    title: 'Test 2',
    screenshot: 'https://bit.ly/2S3j4PQ',
    description: 'This is the best project ever.',
    technologiesUsed: ['HTML', 'SASS', 'JavaScript', 'Version Control'],
    available: true,
    url: 'https://github.com/RyanBeiden',
    githubURL: 'https://github.com/RyanBeiden',
  },
  {
    title: 'Test 3',
    screenshot: 'https://bit.ly/2S3j4PQ',
    description: 'This is the best project ever.',
    technologiesUsed: ['HTML', 'SASS', 'JavaScript', 'Version Control'],
    available: true,
    url: 'https://github.com/RyanBeiden',
    githubURL: 'https://github.com/RyanBeiden',
  },
];

const getProjects = () => projects;

export default { getProjects };
