import { graphql } from 'react-relay';

export default graphql`
  query postPage_postQuery($id: ID!) {
    link(id: $id) {
      id
      imgUrl
      title
      content
      date
      postedBy {
        username
      }
    }
  }
`;
