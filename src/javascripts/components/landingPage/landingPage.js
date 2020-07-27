import bio from '../bio/bio';
import tech from '../tech/tech';
import utils from '../../helpers/utils';
import projects from '../projects/projects';
import '../../../styles/main.scss';
import './landingPage.scss';

const buildLandingPage = () => {
  let domString = '';
  domString += `
    <div class="landing-container">
      <div class="github mt-4">
        <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      <nav>
        <div class="ryan-beiden">
          <h1>Ryan Beiden</h1>
        </div>
        <div class="d-flex flex-wrap justify-content-center pt-4 pb-4">
          <h4>Software Developer</h4>
          <h4>Travel Photographer</h4>
          <h4>Culture Enthusiast</h4>
        </div>
        <ul class="button-group nav-group">
          <a class="bio" id="bio"><li>Bio</li></a>
          <a class="tech" id="tech"><li>Technologies</li></a>
          <a class="proj" id="proj"><li>Projects</li></a>
        </ul>
      </nav>
      <footer>
        <p>© 2020 Ryan Beiden</p>
      </footer>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#proj', projects.buildProjectCards);
  $('body').on('click', '#tech', tech.buildTech);
  $('body').on('click', '#bio', bio.buildBio);
};

export default { buildLandingPage };
