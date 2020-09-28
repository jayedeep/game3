import React, { Component } from "react";
import PlayAgain2 from "./PlayAgain2";
import MainLogic2 from "./MainLogic2";

export default class CombinComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.nwrong === 4 ? (
          <PlayAgain2
            handlePoint={this.props.handlePoint}
            isPlaying={this.props.isPlaying}
            nwrong={this.props.nwrong}
            handleStart={this.props.handleStart}
            handleOver={this.props.handleOver}
            handleWrong={this.props.handleWrong}
          />
        ) : (
          <div>
            <MainLogic2
              handlePoint={this.props.handlePoint}
              isPlaying={this.props.isPlaying}
              nwrong={this.props.nwrong}
              handleStart={this.props.handleStart}
              handleOver={this.props.handleOver}
              handleWrong={this.props.handleWrong}
            />
            <MainLogic2
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
