import {ALL_QUESTS} from '../constants/constants';

const getFilterTabs = (tab, tabs) => {
  if (tab === ALL_QUESTS) {
    return tabs;
  }
  return tabs.filter((item) => item.type === tab);
};

const getAdaptedValue = (name, data) => {
  if(data === ''){
    return '';
  }
  return data.has(name) ? data.get(name) : ''
};

const showNumberOfPersonsFormat = (people) => {
  if (people === '' || people.length === 0) {
    return '';
  }
  return people.join('-')
};

export {getFilterTabs, getAdaptedValue, showNumberOfPersonsFormat};
