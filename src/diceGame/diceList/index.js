import React, { Component } from "react";
import Dice from "./dice";
import { connect } from "react-redux";

class DiceList extends Component {
  renderDiceList = () => {
    const { diceList } = this.props;
    return diceList.map(dice => (
      <li key={dice.id}>
        <Dice diceFace={dice.face} />
      </li>
    ));
  };

  render() {
    return (
      <ul className="dice-list flex justify-center mt-5">
        {this.renderDiceList()}
      </ul>
    );
  }
}

const mapStateToProps = state => ({ diceList: state.diceReducer.diceList });

export default connect(mapStateToProps, null)(DiceList);
