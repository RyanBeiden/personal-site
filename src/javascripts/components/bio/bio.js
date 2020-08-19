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
            <button type="button" class="btn btn-secondary"><a href="https://ryan-beiden.squarespace.com/experiences" target="_blank">Blog</a></button>
            <button type="button" class="btn btn-secondary"><a href="https://ryan-beiden.squarespace.com/" target="_blank">Photography</a></button>
            <button type="button" class="btn btn-secondary"><a href="mailto:rdbeiden@gmail.com" target="_blank">Email</a></button>
          </div>
        </div>
      </div>
      <div class="bio-text">
        <p>
        Before I gained interest in Software Development, I spent my time traveling to different parts of the world for mission work. A few of my favorite places would be Nepal,
        India, and Japan (among others). I spent some time in Brisbane, Australia with YWAM (Youth With A Mission). At the time, photography was my greatest passion, and I needed a
        platform to display my work from my travels. I built a portfolio site and that was the moment I realized I really enjoy and thrive in web design and development. I came home
        with a new passion! From that point on I dedicated my time to learning new skills, whether it was how the technology that we use daily works (thanks to my job at Apple), or a new
        programming language (thanks to many online courses).<br/>
        <a class="btn btn-secondary mt-3" href="https://www.linkedin.com/in/ryan-beiden/" target="_blank">Read More</a>
        </p>
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };
