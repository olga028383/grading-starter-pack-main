import {ActionType} from '../action';
import {ALL_QUESTS} from '../../constants/constants';

const initialState = {
  tab: ALL_QUESTS,
  api: {},
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    case ActionType.SET_API:
      return {
        ...state,
        api: action.payload,
      };
    default:
      return state;
  }
};

export {application};
