/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `export type ${firstCharUpperCase(sliceName)}Schema = {
  // type
};
`;
