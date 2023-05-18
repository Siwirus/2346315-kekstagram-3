export function getData (ifSuccess, onFail) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      ifSuccess(photos);
    })
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка' );
    });
}
