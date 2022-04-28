import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
const NotFoundTitle = styled.h1`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 140%;
  font-weight: 700;
  color: ${({ theme }) => theme.color.whisper2};
`;
export { NotFoundWrapper, NotFoundTitle};
