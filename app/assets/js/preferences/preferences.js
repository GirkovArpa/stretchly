import { $, $$ } from '@sciter';

adjustWindow();

function adjustWindow() {
  const [_, window_width] = document.state.contentWidths();
  const window_height = document.state.contentHeight(window_width);
  const [screen_width, screen_height] = Window.this.screenBox('frame', 'dimension');
  const x = (screen_width - window_width) / 2;
  const y = (screen_height - window_height) / 2;
  Window.this.move(x, y, window_width + 20, window_height, true);
}

async function loadTab(tab) {
  const response = await fetch(`this://app/assets/html/preferences/${tab}.html`);
  const html = await response.text();
  $('#preferences-container').innerHTML = html;
  await new Promise(setTimeout);
  adjustWindow();
}

$('#settings').on('click', () => loadTab('settings'));
$('#schedule').on('click', () => loadTab('schedule'));
$('#about').on('click', () => loadTab('about'));
$('#love').on('click', () => loadTab('love'));