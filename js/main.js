//import {randomDescription} from './data.js';
import {photoRender} from './script.js';
import {getData} from './server-data.js';
import {showAlert} from './util.js';
import './validation.js';
getData(photoRender, showAlert);

