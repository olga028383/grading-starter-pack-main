import MockAdapter from 'axios-mock-adapter';
import {ActionType} from './action';

import {
  fetchQuests,
  fetchQuest,
  sendForm
} from './api-actions';
import {createApi} from '../api';
import {ApiRoute} from '../constants/constants';

let api = null;
let answerQuest = {};

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(jest.fn());

    answerQuest = {
      'id': 1,
      'title': 'Тестовый квест',
      'description': 'Описание для тестового квеста',
      'previewImg': 'img/preview-sklep.jpg',
      'coverImg': 'img/cover-sklep.jpg',
      'type': 'horror',
      'level': 'hard',
      'peopleCount': [3, 6],
      'duration': 90
    };

  });

  it('should make a correct API call to GET /quests', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchQuestsLoader = fetchQuests();
    apiMock
      .onGet(ApiRoute.Quests)
      .reply(200, [answerQuest]);

    fetchQuestsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(1,
          {
            type: ActionType.LOAD_QUESTS,
            payload: [answerQuest],
          });
      });
  });

  it('should make a correct API call to GET /quests/id', () => {
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`${ApiRoute.Quests}/1`)
      .reply(200, answerQuest);

    return fetchQuest(1, api)
      .then((data) => {
        expect(data).toEqual(answerQuest);
      });
  });

  it('should make a correct API call to POST /form', () => {
    const apiMock = new MockAdapter(api);

    const data =
      {
        name: "Jon Vek",
        peopleCount: 1,
        phone: "7000000000",
        isLegal: true
      };

    apiMock
      .onPost(`${ApiRoute.Orders}`)
      .reply(200, data);


    return sendForm(data, api)
      .then((data) => {
        expect(data).toEqual(data);
      });
  });

});
