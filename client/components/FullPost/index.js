import React from 'react';
import moment from 'moment';
import { FullPostImageCard } from '../ImageCard';
import {
  FullPostCard,
  FullPostCardTitle,
  FullPostCardAuthor,
  FullPostCardDate,
  FullPostCardContent,
} from '../Card';
import { FullPostContainer } from '../Container';

export default ({ title, content, postedBy, imgUrl, date }) => {
  return (
    <FullPostContainer>
      <FullPostImageCard src={imgUrl} />
      <FullPostCard>
        <FullPostCardTitle>{title}</FullPostCardTitle>
        <FullPostCardAuthor>written by {postedBy.username}</FullPostCardAuthor>
        <FullPostCardDate>
          {moment(date).format('MMM, DD YYYY')}
        </FullPostCardDate>
        <FullPostCardContent>{content}</FullPostCardContent>
      </FullPostCard>
    </FullPostContainer>
  );
};
