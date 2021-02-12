import React, { Component } from "react";

class Question extends Component {
  render() {
    console.log("Question render");
    let lists = [];
    let data = this.props.data;

    let i = 0;
    while (i < data.length) {
      lists.push(
        <button>
          <h3>{data[i].title}</h3>
          {data[i].desc}
        </button>
      );
      i += 1;
    }
    console.log(this.add);
    return <nav>{lists}</nav>;
  }
}

export default Question;
