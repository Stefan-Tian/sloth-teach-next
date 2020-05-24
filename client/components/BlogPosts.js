import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';
import BlogPostPreview from './BlogPostPreview';

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1>Blog posts</h1>
      <ul>
        {posts.edges.map(({ node }) => (
          <BlogPostPreview key={node.id} post={node} />
        ))}
      </ul>
    </div>
  );
};

// export default createFragmentContainer(BlogPosts, {
//   posts: graphql`
//     fragment BlogPosts_posts on links {
//       links(first: 10, orderBy: date_DESC) {
//         edges {
//           node {
//             id
//             ...BlogPostPreview_post
//           }
//         }
//       }
//     }
//   `,
// });

export default BlogPosts;
