import {
  getFilterTabs,
  getAdaptedValue,
  showNumberOfPersonsFormat,
} from './util';
import {Tabs} from '../constants/adapters';
import {ALL_QUESTS} from "../constants/constants";


const quests = [
  {
    "id": 1,
    "title": "Ритуал",
    "description": "Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?",
    "previewImg": "img/preview-ritual.jpg",
    "coverImg": "img/cover-ritual.jpg",
    "type": "mystic",
    "level": "hard",
    "peopleCount": [3, 5],
    "duration": 120
  },
  {
    "id": 2,
    "title": "Тайны старого особняка",
    "description": "Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.",
    "previewImg": "img/preview-final-frontier.jpg",
    "coverImg": "img/cover-final-frontier.jpg",
    "type": "detective",
    "level": "easy",
    "peopleCount": [2, 5],
    "duration": 60
  },
];

describe('tests utility functions', () => {
  it('Must convert array to hyphenated string format', () => {
    expect(showNumberOfPersonsFormat([1, 3])).toBe('1-3');
    expect(showNumberOfPersonsFormat('')).toBe('');
    expect(showNumberOfPersonsFormat([])).toBe('');
  });

  it('Should return a value from the collection', () => {
    expect(getAdaptedValue('all', Tabs)).toBe('Все квесты');
    expect(getAdaptedValue('', Tabs)).toBe('');
    expect(getAdaptedValue('', '')).toBe('');
  });

  it('gotta bring back the genre', () => {
    expect(getFilterTabs(ALL_QUESTS, quests)).toEqual(quests);
    expect(getFilterTabs('mystic', quests)).toEqual([quests[0]]);
    expect(getFilterTabs('test', quests)).toEqual([]);
  });

});
