import utils from '../../helpers/utils';
import 'bootstrap';
import './bio.scss';
import '../../../styles/main.scss';

const buildBio = () => {
  const domString = `
    <div class="home">
      <a id="go-home"><i class="fas fa-arrow-left"></i></a>
    </div>
    <div class="d-flex justify-content-center">
      <div class="typewriter">
        <h1>About Ryan</h1>
      </div>
    </div>
    <div class="bio-section">
      <div class="profile-pic">
        <img class="container"
          src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fbio-pics.jpg?alt=media&token=8ba003e2-35e8-42f9-a7f4-9c18a37ecda5" alt="Profile Images">
        <div class="pl-2 contact-info">
          <div class="contact-buttons" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"><a href="https://ryan-beiden.squarespace.com/experiences" target="_blank">blog</a></button>
            <button type="button" class="btn btn-secondary"><a href="https://ryan-beiden.squarespace.com/" target="_blank">photography</a></button>
            <button type="button" class="btn btn-secondary"><a href="mailto:rdbeiden@gmail.com" target="_blank">email</a></button>
          </div>
        </div>
      </div>
      <div class="bio-text">
        <p>
        Before I gained interest in software development, I spent my time traveling to different parts of the world and photographing. A few of my favorite places I went to were Nepal,
        India, and Japan (among others). While living in Brisbane, Australia, I decided I needed a platform to display my work from my travels. I built a portfolio site and that was when I 
        found a love for web development. I now have 2+ years of professional development experience working on many projects that require diligence, aptitude for new frameworks and APIs, 
        and collaboration. I thrive in an environment that establishes standards and conventions while actively exploring new practices.<br/>
        <a class="btn btn-secondary mt-3" href="https://www.linkedin.com/in/ryanbeiden/" target="_blank">read more</a>
        </p>
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };
