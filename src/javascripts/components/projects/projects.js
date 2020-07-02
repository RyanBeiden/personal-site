import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';
import '../../../styles/main.scss';
import './projects.scss';

const scrollEvent = (e) => {
  e.preventDefault();
  window.scroll({
    top: 1000,
    left: 1000,
    behavior: 'smooth',
  });
  $('.arrow').addClass('no-arrow');
};

const buildProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = `
        <div class="icons">
          <div class="arrow">
            <a id="down-arrow"><i class="fas fa-arrow-down"></i></a>
          </div>
          <div class="home mt-4">
            <a id="go-home"><i class="fas fa-home"></i></a>
          </div>
          <div class="socials">
            <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          <div class="socials">
            <a href="https://www.instagram.com/ryanbeiden" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center flex-wrap">
      `;
      projects.forEach((project) => {
        if (project.available === true) {
          domString += `
            <div class="projects-page">
              <h2>${project.title}</h2>
              <div class="project-container">
                <div class="description">
                  <img src="${project.screenshot}">
                  <p>${project.description}</p>
                </div>
                <div class="usedTech">
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
      domString += `
      </div>
      `;
      utils.printToDom('#web-page', domString);
      $('.clear').addClass('blur').removeClass('clear');
      $('body').on('click', '#go-home', utils.goHome);
      $('body').on('click', '#down-arrow', scrollEvent);
    })
    .catch((err) => console.error('get projects broke...', err));
};

export default { buildProjectCards };
