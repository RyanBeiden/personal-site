const projects = [
  {
    title: "Repo 1",
    screenshot: "https://bit.ly/2S3j4PQ",
    description: "This is the best project ever.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/RyanBeiden/firstRepo", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubURL: "https://github.com/RyanBeiden/firstRepo"
  },
  {
    title: "Repo 2",
    screenshot: "https://bit.ly/2VVaSSC",
    description: "But this project is even better.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/RyanBeiden/secondRepo",
    githubURL: "https://github.com/RyanBeiden/secondRepo"
  },
  {
    title: "Repo 3",
    screenshot: "https://bit.ly/2W6GqFB",
    description: "Except not as good as this one.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/RyanBeiden/thirdRepo",
    githubURL: "https://github.com/RyanBeiden/thirdRepo"
  },
  {
    title: "Branch Review",
    screenshot: "https://bit.ly/2S1RF0F",
    description: "And above all this one is the bestest.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/RyanBeiden/branch-review",
    githubURL: "https://github.com/RyanBeiden/branch-review"
  },
  {
    title: "Branch Review 2",
    screenshot: "https://bit.ly/2S1RF0F",
    description: "And above all this one is the bestest.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/RyanBeiden/branch-review",
    githubURL: "https://github.com/RyanBeiden/branch-review"
  },
  {
    title: "6th Repo",
    screenshot: "https://bit.ly/2S1RF0F",
    description: "And above all this one is the bestest.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/RyanBeiden/branch-review",
    githubURL: "https://github.com/RyanBeiden/branch-review"
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].available === true) {
    domString += '<div class="container">';
    domString += `<h2>- ${arr[i].title} -</h2>`;
    domString += '<div class="image-container">';
    domString += `<img src="${arr[i].screenshot}">`;
    domString += '</div>';
    domString += `<p>${arr[i].description}</p>`;
    domString += `<h4>${arr[i].technologiesUsed}</h4>`;
    domString += `<a href="${arr[i].url}" target="_blank">View Project</a>`;
    domString += `<a href="${arr[i].githubURL}" target="_blank">View Repository</a>`;
    domString += '</div>';
    } else;
  }
  printToDom('#projectsPage', domString);
}

const init = () => {
  createProjectCards(projects);
}

init();
