import React, { Component } from "react";

class Headers extends Component {
  render() {
    console.log("Headers render");
    return (
      <header>
        {this.props.siteName}
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Headers;
