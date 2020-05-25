import { graphql } from 'react-relay';

export default graphql`
  mutation createPostMutation(
    $title: String!
    $description: String!
    $content: String!
    $imgUrl: String
  ) {
    createLink(
      input: {
        title: $title
        description: $description
        content: $content
        imgUrl: $imgUrl
      }
    ) {
      link {
        id
        title
        description
        imgUrl
      }
    }
  }
`;
