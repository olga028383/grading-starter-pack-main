import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import QuestsList from '../quests-list/quests-list';
import questProp from '../quest/quest.prop.js';
import {getQuests} from "../../../../store/data/selectors";
import {TabsList} from "../tabs-list/tabs-list";
import {getTab} from "../../../../store/application/selectors";
import {getFilterTabs} from "../../../../util/util";

const mapStateToProps = (state) => ({
  quests: getQuests(state),
  tab: getTab(state),
});


const QuestsCatalog = ({quests, tab}) => {
  const questsFiltered = getFilterTabs(tab, quests);
  return (
    <React.Fragment>
      <TabsList quests={quests}/>
      <QuestsList quests={questsFiltered}/>
    </React.Fragment>
  )
};

QuestsCatalog.propTypes = {
  quests: PropTypes.arrayOf(questProp).isRequired,
  tab: PropTypes.string.isRequired,
};


export {QuestsCatalog};
export default connect(mapStateToProps)(QuestsCatalog);

