import React, { Component } from "react";
import PlayAgain from "./PlayAgain";
import "./Loader.css";
import "./MainLogic.css";

export default class MainLogic extends Component {
  static defaultProps = {
    MaxNum: 10,
    operators: ["*", "/", "+", "-", "%"],
  };

  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      operat: "",
      order: [],
      real_ans: 0,
      time: 0,
    };
    this.shuffle = this.shuffle.bind(this);
    this.play = this.play.bind(this);
    this.Checker = this.Checker.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.TimeOut = this.TimeOut.bind(this);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  Wrong() {
    this.props.handleWrong();
    console.log(this.props.nwrong);
  }
  handleTime() {
    if (this.state.time > 0) {
      this.setState({ time: 0 });
    }
    this.updateInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }
  TimeOut() {
    clearInterval(this.updateInterval);
  }

  Checker(guessAns) {
    if (this.state.real_ans === guessAns) {
      console.log("you are win");
      this.play();
      this.handleTime();
      this.TimeOut();
      this.props.handlePoint();
    } else {
      console.log("you are lose");
      this.play();
      this.Wrong();
      this.handleTime();
      this.TimeOut();
    }
  }

  play() {
    var randnum1 = Math.floor(Math.random() * this.props.MaxNum);
    var randnum2 = Math.floor(Math.random() * this.props.MaxNum);
    var rand = Math.floor(Math.random() * this.props.operators.length);
    var op = this.props.operators[rand];

    var realAns;
    if (op === "*") {
      realAns = randnum1 * randnum2;
    } else if (op === "/") {
      realAns = randnum1 / randnum2;
    } else if (op === "+") {
      realAns = randnum1 + randnum2;
    } else if (op === "-") {
      realAns = randnum1 - randnum2;
    } else {
      if (randnum1 === 0) {
        randnum1 = +1;
      } else if (randnum2 === 0) {
        randnum2 = +1;
      }
      if (randnum1 < randnum2) {
        realAns = randnum2 % randnum1;
      } else {
        realAns = randnum1 % randnum2;
      }
    }
    var fakeAns = Math.floor(Math.random() * this.props.MaxNum);
    while (realAns === fakeAns) {
      fakeAns = Math.floor(Math.random() * this.props.MaxNum);
    }

    var arr = [Math.round((realAns + Number.EPSILON) * 100) / 100, fakeAns];
    this.shuffle(arr);

    this.setState({
      num1: randnum1,
      num2: randnum2,
      operat: op,
      order: arr,
      real_ans: Math.round((realAns + Number.EPSILON) * 100) / 100,
    });
  }

  componentDidMount() {
    this.play();
    this.handleTime();
  }

  //   componentWillUnmount() {
  //     clearInterval(this.updateInterval);
  //   }

  componentDidUpdate(prevProps, PrevState) {
    if (this.state.time === 15) {
      this.TimeOut();

      this.Wrong();
    }
  }

  render() {
    const { num1, num2, operat, order } = this.state;

    return (
      <div>
        <div className="d-flex flex-row justify-content-around MainLogic3">
          <div className="d-flex flex-column justify-content-start">
            <div>
              {operat === "%" && num1 < num2 ? (
                <h1 className="mainH13">{`${num2} ${operat} ${num1} = ?`}</h1>
              ) : (
                <h1 className="mainH13">{`${num1} ${operat} ${num2} = ?`}</h1>
              )}
            </div>

            <div className="d-flex flex-row justify-content-around">
              {order.map((m) => (
                <h2>
                  {m == "NaN" ? (
                    <div>
                      <button
                        id="in3"
                        className="btn btn-dark  d-flex justify-content-center align-items-center"
                        onClick={() => this.Checker(m)}
                      >
                        <span className="btnsstext3">infinite</span>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        id="in3"
                        className="btn btn-success  d-flex justify-content-center align-items-center"
                        onClick={() => this.Checker(m)}
                      >
                        <span className="btnsstext3">{m}</span>
                      </button>
                    </div>
                  )}
                </h2>
              ))}
            </div>
          </div>
          <div className="loader3">
            <h1 className="mainH13">{this.state.time}</h1>
          </div>
        </div>
      </div>
    );
  }
}
