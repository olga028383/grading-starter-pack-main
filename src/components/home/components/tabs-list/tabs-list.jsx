import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import questProp from '../quest/quest.prop.js';
import * as S from './tabs-list.styled';
import {getQuests} from "../../../../store/data/selectors";
import Tab from "../tab/tab";

const mapStateToProps = (state) => ({
  quests: getQuests(state),
});

const allQuests = {'all': true};

const generateList = (types) => Object.keys(types.reduce((accumulator, typeQuest) => {
  accumulator[typeQuest.type] = true;
  return accumulator;
}, allQuests));

function TabsList({quests}) {
  return (
    <S.Tabs>
      {generateList(quests).map((quest) => <Tab key={quest} name={quest}/>)}
    </S.Tabs>
  );
}

TabsList.propTypes = {
  quests: PropTypes.arrayOf(questProp).isRequired,
};

export {TabsList};
export default connect(mapStateToProps)(TabsList);

