import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.5s;

  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.1),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  ${({ type }) =>
    type !== 'normal' &&
    `
  :hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.12),
      0 18px 36px -10px rgba(0, 0, 0, 0.05),
      0 -12px 36px -8px rgba(0, 0, 0, 0.015);
  }`}
`;

export const FullPostCard = styled(Card)`
  max-width: 99rem;
  width: 80vw;
  padding: 3.2rem;
  margin: 0 auto;
  font-size: 2.4rem;
`;

export const FullPostCardTitle = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const FullPostCardAuthor = styled.div`
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 0.2rem;
  font-weight: 600;
`;

export const FullPostCardDate = styled.div`
  font-size: 1.8rem;
  color: var(--main-grey-color);
  margin-bottom: 2.4rem;
`;

export const FullPostCardContent = styled.div`
  line-height: 1.6;
`;

export const JoinCard = styled(Card)`
  width: 48.6rem;
  margin-right: 4px;
  margin-left: 4px;
  height: 30rem;
  margin-bottom: 2.4rem;
`;

export const JoinCardInner = styled.div`
  background: linear-gradient(
    to top right,
    var(--main-color),
    var(--main-dark-color)
  );
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const JoinCardText = styled.div`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  color: var(--main-light-grey-color);
  margin-bottom: 1.2rem;
`;

export const JoinCardDescription = styled.div`
  color: var(--main-light-grey-color);
  margin-bottom: 1.2rem;
  max-width: 60%;
  text-align: justify;
  font-size: 1.4rem;
  line-height: 1.6;
`;

export const ArticleCard = styled(Card)`
  width: 74rem;
  height: 24rem;
  margin-bottom: 2.4rem;
  display: flex;
  cursor: pointer;
`;

export const ArticleRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleCardTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

export const ArticleCardDescription = styled.div`
  font-size: 1.4rem;
  margin-bottom: auto;
  color: var(--main-grey-color);
`;

export const ArticleCardAuthor = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ArticleCardDate = styled.div`
  color: var(--main-grey-color);
  font-size: 1.2rem;
`;

export const TeacherCard = styled(Card)`
  width: 24rem;
  height: 32rem;
  margin: 0 4px 24px 4px;
  cursor: pointer;
  text-align: left;
`;

export const TeacherName = styled.div`
  font-size: 1.8rem;
  color: var(--main-color);
  margin-bottom: 1.2rem;
  font-weight: 600;
`;

export const TeacherDescription = styled.div`
  font-size: 1.4rem;
  color: var(--main-grey-color);
  margin-bottom: auto;
`;
