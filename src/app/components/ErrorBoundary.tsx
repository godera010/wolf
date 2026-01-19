import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-red-50 m-4 rounded-xl border border-red-100">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Something went wrong.</h2>
          <p className="text-red-600 mb-4">We're sorry, but an unexpected error occurred.</p>
          <details className="text-left bg-white p-4 rounded-lg border border-red-200 w-full max-w-lg overflow-auto">
            <summary className="cursor-pointer font-medium text-red-700 mb-2">Error Details</summary>
            <pre className="text-xs text-red-500 whitespace-pre-wrap">
              {this.state.error && this.state.error.toString()}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
