import bio from '../bio/bio';
import tech from '../tech/tech';
import utils from '../../helpers/utils';
import projects from '../projects/projects';
import '../../../styles/main.scss';
import './landingPage.scss';

let domString = '';

const buildLandingPage = () => {
  domString += `
    <div class="landing-container">
      <div class="socials mt-4">
        <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      <nav>
        <h1>Ryan Beiden</h1>
        <h3>Software Developer | Travel Photographer | Culture Enthusiast</h3>
        <ul class="button-group">
          <a id="bio"><li>Bio</li></a>
          <a id="tech"><li>Technologies</li></a>
          <a id="proj"><li>Projects</li></a>
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
