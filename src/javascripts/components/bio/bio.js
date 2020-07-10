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
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-1.jpeg?alt=media&token=3fe4dc2e-c5d4-4014-a35b-2456b2594a06" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-2.jpg?alt=media&token=5575ef0f-a4b0-4497-b1f0-25a7f4935605" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-3.jpeg?alt=media&token=5bebfc4e-98f0-4861-a115-53e1b6f376c8" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-4.jpeg?alt=media&token=c82a7791-97b8-4efb-b0f8-f5a6f300ac30" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-5.JPG?alt=media&token=9a59c7c2-2010-4a17-9eff-ddbfb7769e4e" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" 
                src="https://firebasestorage.googleapis.com/v0/b/ryanbeiden.appspot.com/o/images%2Fprofile-6.jpeg?alt=media&token=3da68cb4-53ba-4dfb-9759-057a80d1de8b" alt="Third slide">
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
