import { graphql } from 'react-relay';

export default graphql`
  query indexPage_indexQuery {
    links {
      edges {
        node {
          id
          imgUrl
          url
          title
          description
          date
          postedBy {
            username
          }
        }
      }
    }
  }
`;
