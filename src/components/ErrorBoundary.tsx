import React, { type ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("LazySection ErrorBoundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Failed to load component.</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
