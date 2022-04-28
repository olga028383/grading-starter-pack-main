import React from 'react';
import questProp from '../quest/quest.prop.js';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from '../quest/quest.styled';
import {Levels} from "../../../../constants/adapters";
import {getAdaptedValue, showNumberOfPersonsFormat} from "../../../../util/util";

const Quest = ({quest}) => {
  const {id, title, previewImg, peopleCount, level} = quest;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/detailed-quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={title}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson/>
                {showNumberOfPersonsFormat(peopleCount)} чел
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle/>
                {getAdaptedValue(level, Levels)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

Quest.propTypes = {
  quest: questProp,
};

export default Quest;
