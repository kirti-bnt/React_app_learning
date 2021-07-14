import React, { Component } from "react";
import "./error.css";
import ProductRow from './ProductRow'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ErrorBoundry extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("We found some error : ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div className="error-cought">
            <h1>Fallen UI : Oops ! Can't find this product </h1>
            <div>
              <span>Suggested product category </span>
              {/* <ProductRow /> */}
            </div>
          </div>
        </div>
      );
    }
    // this.props.children used to display whatever include between the opening and closing tags when invoking a component.
    return this.props.children;
  }
}

export default ErrorBoundry;
