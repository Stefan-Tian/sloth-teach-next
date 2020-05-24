import React from 'react';
import { ArticleCard } from './Card';
import { ArticleImageCard } from './ImageCard';
// import { createFragmentContainer, graphql } from 'react-relay';

const BlogPostPreview = ({ post }) => (
  <ArticleCard>
    <ArticleImageCard src={post.imgUrl} />
    <div>
      <h3>{post.title}</h3>
      <div>{post.description}</div>
      <div>{post.date}</div>
    </div>
  </ArticleCard>
);

// export default createFragmentContainer(BlogPostPreview, {
//   post: graphql`
//     fragment BlogPostPreview_post on LinkNode {
//       imgUrl
//       url
//       title
//       description
//       date
//     }
//   `,
// });

export default BlogPostPreview;
