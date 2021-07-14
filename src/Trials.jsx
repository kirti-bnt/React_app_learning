import React, { Component } from "react";

export class trials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 1,
    };
    this.increment = this.increment.bind(this);

    this.decrement = this.decrement.bind(this);
    this.checkError = this.checkError.bind(this);
  }

  increment() {
    this.setState((prev) => {
      console.log("clicked: ", this.state.cnt);
      return { cnt: prev.cnt + 1 };
    });
  }

  decrement() {
    this.setState(() => {
      console.log("last value of cnt ", this.state.cnt, "now all cleared to ");
      return (this.state.cnt = 0);
    });
  }

  checkError(cnt) {
    if (cnt) {
      console.log("no error");
    } else throw new Error("error generated sucessfully !");
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.increment();
            this.checkError(this.state.cnt);
          }}
        >
          increment
        </button>

        <button
          onClick={() => {
            this.decrement();
            this.checkError(this.state.cnt);
          }}
        >
          Generated Error
        </button>
      </div>
    );
  }
}

export default trials;
