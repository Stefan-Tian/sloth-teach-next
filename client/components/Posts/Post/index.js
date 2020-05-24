import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { ArticleImageCard } from '../../ImageCard';
import {
  ArticleCard,
  ArticleCardTitle,
  ArticleCardDescription,
  ArticleRightContainer,
  ArticleCardAuthor,
  ArticleCardDate,
} from '../../Card';

export default ({ post, pid }) => (
  <Link href={`/post/${pid}`}>
    <ArticleCard href={`/post/${pid}`}>
      <ArticleImageCard src={post.imgUrl} />
      <ArticleRightContainer>
        <ArticleCardTitle>{post.title}</ArticleCardTitle>
        <ArticleCardDescription>{post.description}</ArticleCardDescription>
        <div>
          <ArticleCardAuthor>{post.postedBy.username}</ArticleCardAuthor>
          <ArticleCardDate>
            {moment(post.date).format('MMM, DD YYYY')}
          </ArticleCardDate>
        </div>
      </ArticleRightContainer>
    </ArticleCard>
  </Link>
);
