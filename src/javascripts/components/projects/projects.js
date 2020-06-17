const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
};

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
};

const init = () => {
  createProjectCards(projects);
}

init();
