import React, { Component } from "react";
import { connect } from "react-redux";

class GameInfo extends Component {
  render() {
    return (
      <div className="game-info text-4xl">
        <p className="game-info_choose">
          You choose:{" "}
          <span className="text-red-600">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </p>
        <p className="game-info_win">
          Win: <span className="text-lime-600">{this.props.winMatch}</span>
        </p>
        <p className="game-info_total-match">
          Total match:{" "}
          <span className="text-blue-600">{this.props.totalMatch}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taiXiu: state.diceReducer.taiXiu,
  totalMatch: state.diceReducer.totalMatch,
  winMatch: state.diceReducer.winMatch,
});
export default connect(mapStateToProps, null)(GameInfo);
