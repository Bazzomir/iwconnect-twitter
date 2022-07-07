import React from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

class ErrorBoundry extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any): State {
    console.log('error in getDerivedStateFromError', error);
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('error in componentDidCatch', error, errorInfo);
  }

  render() {
    console.log('state', this.state);
    return this.state ? <p>Some error Occured</p> : this.props.children;
  }
}

export default ErrorBoundry;
