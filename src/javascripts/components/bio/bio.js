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
      <h1 class="title">Bio</h1>
    </div>
    <div class="bio-section">
      <div class="profile-pic">
        <img class="container"
          src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-1.jpeg?alt=media&token=3fe4dc2e-c5d4-4014-a35b-2456b2594a06" alt="First slide">
      </div>
      <div class="bio-text">
        <p>Hi, I'm Ryan! I was born and raised in Nashville, TN (I guess I am a unicorn). Growing up, I rock climbed for sport and 
        traveled to multiple countries primarily in Asia for mission work. After High School I moved to Brisbane, Australia to attend a 
        school with YWAM. While there, I managed our bases website and started dabbling with CSS and found a love for it.
        From there on out I spent my free time learning to code HTML and CSS primarily to build my own websites. The problem solving is one 
        of my favorite things about Web Development. When something finally works like you want it to, that is so fulfilling, and I 
        want to continue to chase those challenges.</p>
        <div class="pl-2">
          <a href="https://ryanbeiden.com/portfolio" target="_blank"><i class="fas fa-camera-retro"></i></a>
          <a href="https://ryanbeiden.com/experiences" target="_blank"><i class="fas fa-pencil-alt" style="font-size: 1.8em;"></i></a>
          <a href="mailto:rdbeiden@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };
