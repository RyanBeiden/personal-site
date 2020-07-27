import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';
import '../../../styles/main.scss';
import './projects.scss';

const buildProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = `
        <div class="home mt-4">
          <a id="go-home"><i class="fas fa-home"></i></a>
        </div>
        <div class="accordion container" id="accordionExample">
      `;
      projects.forEach((project) => {
        if (project.available === true) {
          domString += `
            <div class="card">
              <div class="card-header" id="heading${project.id}">
                <h5 class="mb-0 d-flex justify-content-center">
                  <button class="btn drop-btn" type="button" data-toggle="collapse" data-target="#collapse${project.id}" aria-expanded="true" aria-controls="collapse${project.id}">
                    ${project.title} <i class="fas fa-level-down-alt pl-2"></i>
                  </button>
                </h5>
              </div>
              <div id="collapse${project.id}" class="collapse" aria-labelledby="heading${project.id}" data-parent="#accordionExample">
                <div class="card-body">
                  <div class="projects-page row">
                    <div class="col">
                      <img class="container" src="${project.screenshot}">
                      <div class="d-inline">
                        <h3>Technologies Used:</h3>
                        <div class="used-tech d-flex justify-content-center align-items-start">
            `;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < project.technologiesUsed.length; i++) {
            domString += `<h4>${project.technologiesUsed[i]}</h4>`;
          }
          domString += `
                      </div>
                    </div>
                  </div>
                  <div class="col project-data">
                    <p>${project.description}</p>
                    <div class="view-links">
                      <a href="${project.url}" target="_blank">View Project</a>
                      <a href="${project.githubURL}" target="_blank">View Repository</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
        } else;
      });
      domString += `
      </div>
      `;
      utils.printToDom('#web-page', domString);
      $('body').on('click', '#go-home', utils.goHome);
    })
    .catch((err) => console.error('get projects broke...', err));
};

export default { buildProjectCards };
