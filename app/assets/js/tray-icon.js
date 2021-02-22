import { $, $$ } from '@sciter';

(async () => {
  Window.this.trayIcon({
    image: await Graphics.Image.load('this://app/assets/svg/stretchly.svg'),
    text: 'Stretchly-lite - The break time reminder app'
  });

  Window.this.on('trayiconclick', ({ data }) => {
    if (data.buttons == 2) {
      const [sx, sy] = Window.this.box('position', 'client', 'screen');
      const menu = document.$('menu#tray');
      const { screenX, screenY } = data;
      menu.popupAt(screenX - sx, screenY - sy, 2);
    }
  });

  $('li.prefs').on('click', openPreferences);
})();