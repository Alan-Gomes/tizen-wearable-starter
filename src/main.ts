import './style.scss';

window.addEventListener('load', () => {

  document.addEventListener('tizenhwkey', (event: any) => {
    if (event.keyName == 'back') {
      try {
        tizen.application.getCurrentApplication().exit();
      } catch (ignore) {
      }
    }
  });

  const textbox = document.querySelector('.contents')!;
  textbox.addEventListener('click', () => {
    const box = document.querySelector('#textbox') as HTMLElement;
    box.innerText = box.innerText == 'Basic' ? 'Sample' : 'Basic';
  });
});
