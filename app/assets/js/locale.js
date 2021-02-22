(async function () {
  let response = await fetch('this://app/assets/html/locale.html');
  const template = response.text();

  response = await fetch('this://app/assets/json/locales.json');
  const locales = await response.json();

  Object.keys(locales).forEach((id) => {
    const { name, label, flag } = locales[id];
    const html = template
      .replace(/\{name}/g, name)
      .replace(/\{label}/g, label)
      .replace(/\{flag}/g, flag)
      .replace(/\{id}/g, id);
    
    $('#locales').innerHTML += html;
  });

  for (let i = 0; i < 13; i++) {
    $('#locales').innerHTML += '<div .placeholder></div>';
  }

  $('#locales').classList.remove('hidden');
})();