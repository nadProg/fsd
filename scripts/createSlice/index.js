/* eslint-disable @typescript-eslint/no-var-requires */
const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
  console.error(`Укажите слой ${layers.join(' или ')}`);
  process.exit(1);
}

if (!sliceName) {
  console.error('Укажите название слайса');
  process.exit(1);
}

createTemplate(layer, sliceName);
