import React, { Component } from "react";
import CombinComp2 from "./CombinComp2";
import "./MainComp2.css";

export default class MainComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      nwrong: 0,
      points: 0,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleWrong = this.handleWrong.bind(this);
    this.handleOver = this.handleOver.bind(this);
    this.handlePoint = this.handlePoint.bind(this);
  }

  handleStart() {
    this.setState({ isPlaying: true, nwrong: 0, points: 0 });
  }
  handleWrong() {
    this.setState({ nwrong: this.state.nwrong + 1 });
  }
  handleOver() {
    this.setState({ isPlaying: false });
  }
  handlePoint() {
    this.setState({ points: this.state.points + 1 });
  }
  render() {
    return (
      <div className="MainComp3">
        <div className="forh1tag3 d-flex justify-content-center">
          <h1 className="h1tag3">Your Score is {this.state.points}</h1>
        </div>
        <div className="just3">
          {this.state.isPlaying ? (
            <div>
              <CombinComp2
                handlePoint={this.handlePoint}
                isPlaying={this.state.isPlaying}
                nwrong={this.state.nwrong}
                handleStart={this.handleStart}
                handleOver={this.handleOver}
                handleWrong={this.handleWrong}
                handleTime={this.handleTime}
              />
            </div>
          ) : (
            <div className="btns3">
              <button
                id="btns3"
                className="btn btn-success  d-flex justify-content-center align-items-center"
                onClick={this.handleStart}
              >
                <span className="btntext3">Start Game</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
