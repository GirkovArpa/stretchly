import { $, $$ } from '@sciter';

(async function () {
  const response = await fetch('this://app/assets/json/locales.json');
  const locales = await response.json();

  Object.keys(locales).forEach((id) => {
    const { name, label, flag } = locales[id];
    $('#languages').$('.list').innerHTML += `<option value="${id}">${label}</option>`;
  });
  $('#languages').value = 'en';
})();