import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundry extends Component {
  state = {
    haserror: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { haserror: true };
  }

  componentDidCatch(error, info) {
    //eslint-disable-next-line
    console.error("ErrorBoundryCought an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.haserror) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.haserror) {
      return (
        <div>
          <h1>
            Something went wrong <Link to="/">click here</Link>for home
          </h1>
          <h2>or else wait </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
