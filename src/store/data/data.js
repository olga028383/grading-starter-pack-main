import {ActionType} from '../action';

const initialState = {
  isDataLoaded: false,
  quests: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTS:
      return {
        ...state,
        quests: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {data};
