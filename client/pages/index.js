import React from 'react';
import withData from '../lib/withData';
import Posts from '../components/Posts';
import indexPageQuery from '../queries/indexPage';
import Container, { LeftContainer } from '../components/Container';
import Teachers from '../components/Teachers';
import {
  JoinCard,
  JoinCardInner,
  JoinCardText,
  JoinCardDescription,
} from '../components/Card';
import Button from '../components/Button';

const Index = ({ links }) => (
  <>
    <Container>
      <Posts posts={links} />
      <LeftContainer>
        <JoinCard type="normal">
          <JoinCardInner>
            <JoinCardText>立即加入，每月只要99元</JoinCardText>
            <JoinCardDescription>
              訂閱即享每週兩篇英語文章導讀，包含單字整理、用語教學及語意解析。另有每月兩篇英語作文批改服務！
            </JoinCardDescription>
            <Button theme="white">手刀註冊</Button>
          </JoinCardInner>
        </JoinCard>
        <Teachers />
      </LeftContainer>
    </Container>
  </>
);

export default withData(Index, {
  query: indexPageQuery,
});
