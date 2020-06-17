import utils from '../../helpers/utils';
import './landingPage.scss';

const buildLandingPage = () => {
  let domString = '';
  domString += `
    <div class="socials">
      <a href="https://github.com/RyanBeiden" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/ryanbeiden" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <nav class="landing-page">
      <h1>Ryan Beiden</h1>
      <h3>Software Developer | Travel Photographer | Culture Enthusiast</h3>
      <ul class="button-group">
        <li>Bio</li>
        <li>Technologies</li>
        <li>Projects</li>
      </ul>
    </nav>
  `;
  utils.printToDom('#landing-page', domString);
};

export default { buildLandingPage };
