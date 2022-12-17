import {
  Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { PageError } from '@/shared/ui/PageError';

type ErrorBoundaryProps = {
  children: ReactNode
};

type ErrorBoundaryState = {
  hasError: boolean
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    // You can render any custom fallback UI
    return (
      <Suspense fallback="">
        <PageError />
      </Suspense>
    );
  }
}
