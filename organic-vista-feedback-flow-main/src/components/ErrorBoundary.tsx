import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center p-8 text-forest-600">
          <div className="text-center">
            <div className="text-4xl mb-4">🌿</div>
            <p className="text-lg font-medium">Something went wrong with the 3D experience</p>
            <p className="text-sm text-forest-500 mt-2">Falling back to simplified view</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}