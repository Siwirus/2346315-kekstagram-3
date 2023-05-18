const step = 25;
const maxValue = 100;
const minValue = 25;
const input = document.querySelector('.scale__control--value');
const value = input.value;
let scaleValueWithoutPercent = value.substring(0, value.length - 1);

export const img = document.querySelector('.img-upload__preview').querySelector('img');
function scaleChanger(scaleChange) {
  if (scaleChange) {
    if (scaleValueWithoutPercent > minValue) {
      scaleValueWithoutPercent -= step;
      input.value = `${scaleValueWithoutPercent  }%`;
      img.style.transform = `scale(${scaleValueWithoutPercent / 100})`;
    }
  } else {
    if (scaleValueWithoutPercent < maxValue) {
      scaleValueWithoutPercent += step;
      input.value = `${scaleValueWithoutPercent  }%`;
      img.style.transform = `scale(${scaleValueWithoutPercent / 100})`;
    }
  }

}

document.querySelector('.scale__control--smaller').addEventListener('click', () => {
  scaleChanger(true);
});

document.querySelector('.scale__control--bigger').addEventListener('click', () => {
  scaleChanger(false);
});

export const resetScale = () => {
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('.img-upload__preview').style = 'transform: scale(1)';
};


