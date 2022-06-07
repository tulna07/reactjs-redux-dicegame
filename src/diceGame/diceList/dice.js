import React, { Component } from "react";

export default class Dice extends Component {
  render() {
    return (
      <img
        src={`./img/diceGame/${this.props.diceFace}.png`}
        className="w-[35px] h-[35px]"
        alt="dice"
      />
    );
  }
}
