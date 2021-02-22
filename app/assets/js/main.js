import { $, $$ } from '@sciter';

globalThis.$ = $;
globalThis.$$ = $$;

const window_width = 984;
const window_height = 617;
const [screen_width, screen_height] = Window.this.screenBox('frame', 'dimension');
const x = (screen_width - window_width) / 2;
const y = (screen_height - window_height) / 2;
Window.this.move(x, y, window_width, window_height, true);

$('#preferences').on('click', openPreferences);
$('li.prefs').on('click', openPreferences);
$('li.quit').on('click', () => Window.this.close());

function openPreferences() {
  $('li.prefs').state.disabled = true;
  const window = Window.this.modal({
    caption: 'Stretchly-lite Preferences',
    x,
    y,
    width: 600,
    height: 400,
    alignment: 5,
    url: 'this://app/assets/html/preferences/preferences.html',
    state: Window.WINDOW_SHOWN,
    $: $,
    $$: $$
  });
}


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
})();