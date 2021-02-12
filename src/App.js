import React, { Component } from "react";
import "./App.css";
import WebTitle from "./components/WebTitle";
import Question from "./components/Question";

class App extends React.Component {
  // state값 초기화
  constructor(props) {
    super(props);
    this.state = {
      WebTitle: {
        title: "Jewelry App",
        sub: "Find the perfect jewel for me!",
      },

      userData: {
        part1: {
          E: 0,
          I: 0,
        },
        part2: {
          S: 0,
          N: 0,
        },
        part3: {
          T: 0,
          F: 0,
        },
        part4: {
          J: 0,
          P: 0,
        },
      },

      contents: [
        {
          id: 1,
          title: "1번",
          desc: "나는 말하기를 좋아해 실수 할 때가 종종 있다.",
        },
        {
          id: 2,
          title: "2번",
          desc: "나는 말이 없어 주변사람들이 답답할 때가 있다. ",
        },
      ],
    };
  }

  render() {
    console.log("App render");

    return (
      <div className="App">
        <WebTitle
          title={this.state.WebTitle.title}
          sub={this.state.WebTitle.sub}
        ></WebTitle>

        <Question data={this.state.contents}></Question>
      </div>
    );
  }
}

export default App;
