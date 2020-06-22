import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';
import '../../../styles/main.scss';
import './projects.scss';

const projects = projectData.getProjects();

const buildProjectCards = () => {
  let domString = `
    <div class="socials">
      <a id="go-home"><i class="fas fa-home"></i></a>
      <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/ryanbeiden" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="row d-flex align-items-start">
  `;
  projects.forEach((project) => {
    if (project.available === true) {
      domString += `
        <div class="container projects-page col">
          <h2>${project.title}</h2>
          <div class="project-container">
            <div class="description">
              <img src="${project.screenshot}">
              <p>${project.description}</p>
            </div>
            <div class="tech">
        `;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < project.technologiesUsed.length; i++) {
        domString += `<h4>${project.technologiesUsed[i]}</h4>`;
      }
      domString += `
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <a href="${project.url}" target="_blank">View Project</a>
            <a href="${project.githubURL}" target="_blank">View Repository</a>
          </div>
        </div>
      `;
    } else;
  });
  domString += '</div>';
  utils.printToDom('#web-page', domString);
  $('.clear').addClass('blur').removeClass('clear');
};

$('body').on('click', '#go-home', utils.goHome);

export default { buildProjectCards };
