import React, { Component } from "react";

class WebTitle extends Component {
  render() {
    console.log("WebTitle render");
    return (
      <header>
        <h1>
          <a href="/">{this.props.title}</a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default WebTitle;
