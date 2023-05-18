import {sendData} from './load-data.js';
import {closeOverlay} from './form-work.js';
import {createMessage} from './util.js';
import {stringLengthMax, stringLengthMin} from './util.js';

const submitButton = document.querySelector('#upload-submit');
const form = document.querySelector('.img-upload__form');
const description = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function commentCheck(text) {
  return stringLengthMin(text, 19) && stringLengthMax(text, 141);
}

pristine.addValidator(description, commentCheck, 'Comment length shouldn\'t be less than 20 or more than 140 symbols');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = true;
    sendData(
      () => {
        closeOverlay(false);
        createMessage('success');
        submitButton.disabled = false;
      },
      () => {
        closeOverlay(true);
        createMessage('error');
        submitButton.disabled = false;
      },
      new FormData(evt.target),
    );
  }
});
