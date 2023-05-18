function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
function stringLengthMax (string, length) {
  return string.length <= length;
}

function stringLengthMin (string, length) {
  return string.length >= length;
}

function createMessage (downloadResult) {
  const body = document.querySelector('body');

  const successTemplate = document.querySelector(`#${downloadResult}`).content.cloneNode(true);

  body.appendChild(successTemplate);

  const message = document.querySelector(`.${downloadResult}`);

  const closeButton = message.querySelector('button');

  const onPopupEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      message.remove();
      removeListeners();
    }
  };

  document.addEventListener('keydown', onPopupEscKeydown);

  const onOutsideOrButton = (evt) => {
    const clickButton = evt.composedPath().includes(closeButton);
    const clickInside = evt.composedPath().includes(message.querySelector('div'));
    if (clickButton || !clickInside) {
      message.remove();
      removeListeners();
    }
  };

  document.addEventListener('click', onOutsideOrButton);

  function removeListeners () {
    document.removeEventListener('click', onOutsideOrButton);
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100px';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0px';
  alertContainer.style.top = '0px';
  alertContainer.style.right = '0px';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};

export {getRandomNumber, stringLengthMax, stringLengthMin, showAlert, createMessage};
