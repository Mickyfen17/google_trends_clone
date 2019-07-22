import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <h1>Something went wrong.</h1> : children;
  }
}

export default ErrorBoundary;
