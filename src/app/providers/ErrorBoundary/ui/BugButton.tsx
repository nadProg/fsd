import { useEffect, useState } from 'react';

import { PropsWithClassName } from 'shared/types';

import { Button } from 'shared/ui/Button';

type BugButtonProps = PropsWithClassName;

// Component for ErrorBoundary testing
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button theme="clear" className={className} onClick={throwError}>
      throw error
    </Button>
  );
};
