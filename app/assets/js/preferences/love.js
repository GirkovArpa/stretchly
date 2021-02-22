import { $, $$, launch } from '@sciter';

console.log('love.js');

$('#patron').on('click', () => {
  launch('https://hovancik.net/stretchly/sponsor');
  console.log('patron clicked');
});