import {data} from './data';
import {ActionType} from '../action';

const questsId = [{id: 1}, {id: 2}];

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({isDataLoaded: false, quests: []});
  });

  it('should set up a list of quests', () => {
    const questAction = {
      type: ActionType.LOAD_QUESTS,
      payload: questsId,
    };

    expect(data({isDataLoaded: false, quests: []}, questAction))
      .toEqual({isDataLoaded: true, quests: questsId});

    expect(data({isDataLoaded: true, quests: []}, questAction))
      .toEqual({isDataLoaded: true, quests: questsId});

  });

  it('should set the data load flag', () => {
    const isLoadAction = {
      type: ActionType.LOAD_QUESTS,
      payload: questsId,
    };

    expect(data({isDataLoaded: false, quests: []}, isLoadAction))
      .toEqual({isDataLoaded: true, quests: questsId});

    expect(data({isDataLoaded: false, quests: questsId}, isLoadAction))
      .toEqual({isDataLoaded: true, quests: questsId});

  });
});
