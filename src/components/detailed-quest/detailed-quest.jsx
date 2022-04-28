import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainLayout} from 'components/common/common';
import {ReactComponent as IconClock} from 'assets/img/icon-clock.svg';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import {BookingModal} from './components/components';
import * as React from "react";
import NotFound from "../not-found/not-found";
import Loading from "../loading/loading";
import {fetchQuest} from "../../store/api-actions";
import {getApi} from "../../store/application/selectors";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import {getAdaptedValue, showNumberOfPersonsFormat} from "../../util/util";
import {Levels, Tabs} from "../../constants/adapters";

const mapStateToProps = (state) => ({
  getApi: getApi(state),
});

const DetailedQuest = ({getApi}) => {
  const params = useParams();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const [data, setData] = useState({
    quest: {},
    isPage: true,
    isLoading: false,
  });

  const {quest, isLoading, isPage} = data;
  const {title, coverImg, description, peopleCount, level, type, duration} = quest;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleCloseModalClick = () => {
    setIsBookingModalOpened(false);
  };

  useEffect(() => {
    fetchQuest(params.id, getApi)
      .then((questData) => {
        setData({
          ...data,
          quest: questData,
          isLoading: true,
        });
      })
      .catch(() => {
        setData({
          ...data,
          isPage: false,
        });
      });

  }, [params.id]);

  if (!isPage) {
    return (
      <NotFound/>
    );
  }

  if (!isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getAdaptedValue(type, Tabs).toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20"/>
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24"/>
                <S.FeatureTitle>{showNumberOfPersonsFormat(peopleCount)} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24"/>
                <S.FeatureTitle>{getAdaptedValue(level, Levels)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal handleCloseModalClick={handleCloseModalClick}/>}
      </S.Main>
    </MainLayout>
  );
};

DetailedQuest.propTypes = {
  getApi: PropTypes.func.isRequired,
};

export {DetailedQuest};
export default connect(mapStateToProps, null)(DetailedQuest);
