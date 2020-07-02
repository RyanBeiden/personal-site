import utils from '../../helpers/utils';
import 'bootstrap';
import './bio.scss';
import '../../../styles/main.scss';

const buildBio = () => {
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
    <div class="d-flex justify-content-center bio-section">
      <div class="container row">
        <div id="carouselExampleFade" class="carousel slide carousel-fade col" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="profile-1.jpeg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../../src/assets/profile-2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../../src/assets/profile-3.jpeg" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../../src/assets/profile-4.jpeg" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../../src/assets/profile-5.JPG" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../../src/assets/profile-6.jpeg" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="col">
          <p>Hi, I'm Ryan! I was born and raised in Nashville, TN (I guess I am a unicorn). Growing up I rock climbed for sport and 
          traveled to multiple countries primarily in Asia for mission work. After High School I moved to Brisbane, Australia to attend a 
          school with YWAM. While there, I managed our bases website and started dabbling with CSS and found a love for it.
          From there on out I spent my free time learning to code HTML and CSS primarily to build my own websites. The problem solving is one 
          of my favorite things about Web Development. When something finally works like you want it to, that is so fulfilling, and I 
          want to continue to chase those challenges.</br>
          I am also newly engaged to a kind & beautiful girl named Hailey! (Image 3)</p>
          <a href="https://www.facebook.com/ryan.beiden/" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://ryanbeiden.com/portfolio" target="_blank"><i class="fas fa-camera-retro"></i></a>
          <a href="https://ryanbeiden.com/experiences" target="_blank"><i class="fas fa-pen-fancy" style="font-size: 1.8em;"></i></a>
          <a href="mailto:rdbeiden@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  `;
  utils.printToDom('#web-page', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };
