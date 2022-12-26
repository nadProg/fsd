module.exports = {
  '**/*.{ts,tsx}': [
    () => 'yarn check-types',
    'yarn lint-ts',
  ],
  '**/*.scss': 'yarn lint-scss',
};
