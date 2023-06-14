// @ts-nocheck
import React, { Component } from 'react';
import { TbReload } from 'react-icons/tb';

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-component">
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            <TbReload /> Try again?
          </button>
        </div>
      )
    }
    return this.props.children;
  }
}
 
export default ErrorBoundary;