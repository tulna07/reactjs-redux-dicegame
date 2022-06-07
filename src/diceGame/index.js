import React, { Component } from "react";
import DiceList from "./diceList";
import GameInfo from "./gameInfo";
import "./index.css";
import { connect } from "react-redux";

class DiceGame extends Component {
  render() {
    return (
      <div
        className="game fixed w-full h-full"
        style={{ backgroundImage: "url('./img/diceGame/bgGame.png')" }}
      >
        <div className="game-title text-center text-5xl mt-5">Dice Game</div>
        <div className="flex text-center">
          <div className="basis-1/3">
            <button
              className="btn w-36 h-36 bg-blue-500 text-white text-4xl rounded-[5px] border-[5px] border-[#52EE62] focus:border-black"
              onClick={() => this.props.datCuoc(true)}
            >
              TÀI
            </button>
          </div>
          <div className="basis-1/3">
            <DiceList />
          </div>
          <div className="basis-1/3">
            <button
              className="btn w-36 h-36 bg-blue-500 text-white text-4xl rounded-[5px] border-[5px] border-[#52EE62]"
              onClick={() => this.props.datCuoc(false)}
            >
              XỈU
            </button>
          </div>
        </div>

        <div className="text-center">
          <GameInfo />
          <button
            className="bg-lime-500 text-white mx-auto p-2 rounded-[5px] mt-5"
            onClick={this.props.startGame}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({ type: "START_GAME" }),
  datCuoc: tai => dispatch({ type: "DAT_CUOC", payload: tai }),
});

export default connect(null, mapDispatchToProps)(DiceGame);
