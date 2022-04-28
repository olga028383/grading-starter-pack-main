export const ActionType = {
  SET_IS_LOAD_DATA: 'data/loadData',
  LOAD_QUESTS: 'data/loadQuests',
  CHANGE_TAB: 'application/changeTab',
  SET_API: 'application/setApi',
};

const changeTab = (quest) => ({
  type: ActionType.CHANGE_TAB,
  payload: quest,
});

const loadQuests = (quests) => ({
  type: ActionType.LOAD_QUESTS,
  payload: quests,
});

const setApi = (api) => ({
  type: ActionType.SET_API,
  payload: api,
});

export {loadQuests, changeTab, setApi};
