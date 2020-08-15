import utils from '../../helpers/utils';
import 'bootstrap';
import './bio.scss';
import '../../../styles/main.scss';

const buildBio = () => {
  const domString = `
    <div class="home mt-4">
      <a id="go-home"><i class="fas fa-home"></i></a>
    </div>
    <div class="d-flex justify-content-center">
      <h1 class="title">About Ryan</h1>
    </div>
    <div class="bio-section">
      <div class="profile-pic">
        <img class="container"
          src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fbio-pics.jpg?alt=media&token=8ba003e2-35e8-42f9-a7f4-9c18a37ecda5" alt="Profile Images">
        <div class="pl-2 contact-info">
          <div class="contact-buttons" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"><a href="https://ryanbeiden.com/experiences" target="_blank">Blog</a></button>
            <button type="button" class="btn btn-secondary"><a href="mailto:rdbeiden@gmail.com" target="_blank">Email</a></button>
            <button type="button" class="btn btn-secondary"><a href="https://www.linkedin.com/in/ryan-beiden/" target="_blank">LinkedIn</a></button>
            <button type="button" class="btn btn-secondary"><a href="https://ryanbeiden.com/portfolio" target="_blank">Photography</a></button>
          </div>
        </div>
      </div>
      <div class="bio-text">
        <p>Hi, I'm Ryan! I was born and raised in Nashville, TN (I guess I am a unicorn). Growing up, I rock climbed for sport and 
        traveled to multiple countries primarily in Asia for mission work. After High School I moved to Brisbane, Australia to attend a 
        school with YWAM. While there, I managed our bases website and started dabbling with CSS and found a love for it.
        From there on out I spent my free time learning to code HTML and CSS primarily to build my own websites. The problem solving is one 
        of my favorite things about Web Development. When something finally works like you want it to, that is so fulfilling, and I 
        want to continue to chase those challenges.</p>
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };
