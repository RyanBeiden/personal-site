import utils from '../../helpers/utils';
import './tech.scss';
import '../../../styles/main.scss';

const buildTech = () => {
  const domString = `
    <div class="icons">
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
    <div class="container">
      <h1 class="tech-title">Technology Knowledge Chart</h1>
      <div class="d-flex justify-content-center">
        <img class="tech-table" src="../../../src/assets/tech.png">
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildTech };
