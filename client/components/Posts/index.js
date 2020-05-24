import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.edges.map(({ node }) => (
          <Post key={node.id} pid={node.id} post={node} />
        ))}
      </ul>
    </div>
  );
};
