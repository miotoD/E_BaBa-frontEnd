import { buyCake } from "./cakeActions";
import { Buy_Cake } from "./cakeTypes";

const iniitalState = {
  numOfCake: 10,
};

export const cakeReducer = (state = iniitalState, action: object) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
