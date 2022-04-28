import React from 'react';
import PropTypes from 'prop-types';
import Quest from '../quest/quest';
import questProp from '../quest/quest.prop.js';
import * as S from './quests-list.styled';

const QuestsList = ({quests}) => {

  return (
    <S.QuestsList>
      {quests.map((quest, id) => {
        const keyValue = `${id}-${quest.previewImg}`;
        return <Quest key={keyValue} quest={quest}/>;
        ;
      })}
    </S.QuestsList>
  );
}

QuestsList.propTypes = {
  quests: PropTypes.arrayOf(questProp).isRequired,
};

export default QuestsList;
