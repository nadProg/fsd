// eslint-disable-next-line import/no-extraneous-dependencies
import { concurrently } from 'concurrently';

concurrently(
  [
    'npm:watch-*',
    { command: 'check-types', name: 'check-types' },
    { command: 'lint:ts', name: 'lint:ts' },
    { command: 'lint:scss', name: 'lint:scss' },
  ],
);
