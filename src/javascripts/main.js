import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import landingPage from './components/landingPage/landingPage';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  landingPage.buildLandingPage();
};

init();
