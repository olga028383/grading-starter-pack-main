import {ReactComponent as IconAll} from 'assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from 'assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from 'assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from 'assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from 'assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from 'assets/img/icon-scifi.svg';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as S from './tab.styled';
import {changeTab} from '../../../../store/action';
import {Tabs} from "../../../../constants/adapters";
import {getTab} from '../../../../store/application/selectors';
import {getAdaptedValue} from "../../../../util/util";

const mapStateToProps = (state) => ({
  tab: getTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleTabChange(data) {
    dispatch(changeTab(data));
  },
});

const getComponentIcon = (name) => {
  const IconComponents = {
    'all': <IconAll/>,
    'adventures': <IconAdventures/>,
    'horror': <IconHorrors/>,
    'mystic': <IconMystic/>,
    'detective': <IconDetective/>,
    'sci-fi': <IconScifi/>
  };

  if (IconComponents[name]) {
    return IconComponents[name];
  }

  return <IconAll/>;
};

const Tab = ({tab, handleTabChange, name}) => {
  const isActiveTab = name === tab;
  return (
    <S.TabItem>
      <S.TabBtn isActive={isActiveTab} onClick={(evt) => {
        evt.preventDefault();
        handleTabChange(name);
      }}>
        {getComponentIcon(name)}
        <S.TabTitle>{getAdaptedValue(name, Tabs)}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export {Tab};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);
