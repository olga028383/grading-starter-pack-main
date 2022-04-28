import {application} from './application';
import {ActionType} from '../action';
import {ALL_QUESTS} from '../../constants/constants';

describe('Reducer: application', () => {
  it('without additional parameters should return initial state', () => {
    expect(application(undefined, {}))
      .toEqual({tab: ALL_QUESTS, api: {}});
  });

  it('should change tab', () => {
    const tabAction = {
      type: ActionType.CHANGE_TAB,
      payload: 'horror',
    };

    expect(application({tab: ALL_QUESTS, api: {}}, tabAction))
      .toEqual({tab: 'horror', api: {}});

    expect(application({tab: ALL_QUESTS, api: 'something'}, tabAction))
      .toEqual({tab: 'horror', api: 'something'});
  });

  it('should add api', () => {
    const genreAction = {
      type: ActionType.SET_API,
      payload: 'something',
    };

    expect(application({tab: ALL_QUESTS, api: {}}, genreAction))
      .toEqual({tab: ALL_QUESTS, api: 'something'});

    expect(application({tab: 'horror', api: {}}, genreAction))
      .toEqual({tab: 'horror', api: 'something'});
  });
});
