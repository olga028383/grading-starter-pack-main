import {
  changeTab,
  loadQuests,
  setApi,
  ActionType
} from './action';

describe('Actions', () => {
  it('Action creator for changing tab.', () => {
    const expectedAction = {
      type: ActionType.CHANGE_TAB,
      payload: 'horror',
    };

    const tab = 'horror';

    expect(changeTab(tab)).toEqual(expectedAction);
  });

  it('Action creator for getting a list.', () => {
    const expectedAction = {
      type: ActionType.LOAD_QUESTS,
      payload: [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
      ],
    };

    const quests = [
      {id: 1, name: 'Name 1'},
      {id: 2, name: 'Name 2'},
    ];

    expect(loadQuests(quests)).toEqual(expectedAction);
  });

  it('Action creator for to get the api method.', () => {
    const expectedAction = {
      type: ActionType.SET_API,
      payload: 'something',
    };

    const api = 'something';

    expect(setApi(api)).toEqual(expectedAction);
  });

});
