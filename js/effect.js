import {img} from './scale-photo.js';
import {settings} from './data.js';


const sliderElement = document.querySelector('.effect-level__slider');

const valueElement = document.querySelector('.effect-level__value');

let currentSettings = settings[0];

const effects = document.querySelector('.effects__list');

const defaultEffect = effects.querySelector('#effect-none');

let effect = 'none';


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', () => {
  if (effect === 'none') {
    valueElement.value = '';
    img.style.filter = effect;
    sliderElement.classList.add('hidden');
  } else {
    valueElement.value = sliderElement.noUiSlider.get();
    let style;
    if (currentSettings.symbol) {
      style = `${currentSettings.filter}(${valueElement.value}${currentSettings.symbol})`;
    } else {
      style = `${currentSettings.filter}(${valueElement.value})`;
    }
    img.style.filter = style;
  }
});


function updateEffect (currentEffect) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.start,
  });
}


effects.addEventListener('click', (evt) => {
  if (evt.target.matches('input[type="radio"]')) {

    img.classList.remove(`effects__preview--${effect}`);
    effect = evt.target.value;
    img.classList.add(`effects__preview--${effect}`);

    if (effect === 'none') {
      updateEffect(currentSettings);
    } else {
      settings.forEach((element) => {
        if (element.name === effect) {
          currentSettings = element;
          updateEffect(currentSettings);
          sliderElement.classList.remove('hidden');
        }
      });
    }
  }
});

function resetEffects () {
  img.classList.remove(`effects__preview--${effect}`);
  defaultEffect.checked = true;
  valueElement.value = '';
  img.style.filter = 'none';
  sliderElement.classList.add('hidden');
}

export {resetEffects};
