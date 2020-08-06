import utils from '../../helpers/utils';
import './tech.scss';
import '../../../styles/main.scss';

const buildTech = () => {
  const domString = `
    <div class="home mt-4">
      <a id="go-home"><i class="fas fa-home"></i></a>
    </div>
    <div class="d-flex justify-content-center">
      <h1 class="title">Technologies</h1>
    </div>
    <div class="container">
      <div class="tech-container">
        <h2>HTML</h2>
        <div class="progress">
          <div class="progress-bar html" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="tech-container">
        <h2>CSS</h2>
        <div class="progress">
          <div class="progress-bar css" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="tech-container">
        <h2>JavaScript</h2>
        <div class="progress">
          <div class="progress-bar javascript" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="tech-container">
        <h2>JQuery</h2>
        <div class="progress">
          <div class="progress-bar jquery" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="tech-container">
        <h2>SASS</h2>
        <div class="progress">
          <div class="progress-bar sass" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    <div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildTech };
