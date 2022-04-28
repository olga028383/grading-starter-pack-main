import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.NotFoundWrapper>
    <S.NotFoundTitle>404. Page not found</S.NotFoundTitle>
    <Link to="/">Вернуться на главную</Link>
  </S.NotFoundWrapper>
);

export default NotFound;
