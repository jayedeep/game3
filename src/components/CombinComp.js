import React, { Component } from "react";
import PlayAgain from "./PlayAgain";
import MainLogic from "./MainLogic";

export default class CombinComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.nwrong === 4 ? (
          <PlayAgain
            handlePoint={this.props.handlePoint}
            isPlaying={this.props.isPlaying}
            nwrong={this.props.nwrong}
            handleStart={this.props.handleStart}
            handleOver={this.props.handleOver}
            handleWrong={this.props.handleWrong}
          />
        ) : (
          <div>
            <MainLogic
              handlePoint={this.props.handlePoint}
              isPlaying={this.props.isPlaying}
              nwrong={this.props.nwrong}
              handleStart={this.props.handleStart}
              handleOver={this.props.handleOver}
              handleWrong={this.props.handleWrong}
            />
            <MainLogic
              handlePoint={this.props.handlePoint}
              isPlaying={this.props.isPlaying}
              nwrong={this.props.nwrong}
              handleStart={this.props.handleStart}
              handleOver={this.props.handleOver}
              handleWrong={this.props.handleWrong}
            />
          </div>
        )}
      </div>
    );
  }
}
