import diceList from "./data.json";
const initialState = {
  taiXiu: true,
  diceList,
  totalMatch: 0,
  winMatch: 0,
};

const NO_OF_DICE_FACES = 6;

// Random integer number from 0 to x
const randomIntFrom0To = upperBounce =>
  Math.floor(Math.random() * upperBounce) + 1;

const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      const diceList = state.diceList.map(dice => ({
        id: dice.id,
        face: randomIntFrom0To(NO_OF_DICE_FACES),
      }));

      const total = diceList.reduce((total, dice) => (total += dice.face), 0);
      if (
        (!state.taiXiu && 3 <= total && total <= 11) ||
        (state.taiXiu && total >= 12)
      )
        state.winMatch++;

      state.totalMatch++;
      state.diceList = diceList;
      break;
    case "DAT_CUOC":
      state.taiXiu = action.payload;
      break;
    default:
      return { ...state };
  }

  return { ...state };
};
export default diceReducer;
