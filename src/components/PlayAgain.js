import React, { Component } from "react";
import "./PlayAgain.css";
import lose from "../img/lose.png";
export default class PlayAgain extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-lg-center align-items-center">
        <img
          src={lose}
          className="imgwon3"
          style={{ width: "20vw", height: "20vh" }}
        />
        <h1 className="h1Last3">Try Again!!</h1>
        <button
          id="last3"
          className="btn btn-success  d-flex justify-content-center align-items-center"
          onClick={this.props.handleOver}
        >
          <span className="btnstext3">Play Again</span>
        </button>
      </div>
    );
  }
}
