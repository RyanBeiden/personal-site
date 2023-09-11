import utils from '../../helpers/utils';
import './tech.scss';
import '../../../styles/main.scss';
import techData from '../../helpers/data/techData';

const buildTech = () => {
  let domString = `
    <div class="home">
      <a id="go-home"><i class="fas fa-arrow-left"></i></a>
    </div>
    <div class="d-flex justify-content-center">
      <div class="typewriter">
        <h1>Technologies</h1>
      </div>
    </div>
    <div class="container tech-holder">`;

  techData.getTech()
    .then((allTech) => {
      allTech.forEach((tech) => {
        const negativePercent = 100 - tech.percentage;
        const displayPercent = tech.percentage;

        domString += `      
          <div class="tech-container">
            <h2>${tech.techName}</h2>
            <div class="progress">
              <div class="progress-bar full" role="progressbar"aria-valuemin="0" aria-valuemax="100" style="width: ${displayPercent}%;"></div>
              <div class="progress-bar empty" role="progressbar"aria-valuemin="0" aria-valuemax="100"
                style="width: ${negativePercent}%; background-color="whitesmoke"></div>
            </div>
          </div>`;
      });
      utils.printToDom('#web-page', domString);
    })
    .catch((err) => console.error(err));

  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildTech };
