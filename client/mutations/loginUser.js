import { commitMutation, graphql } from 'react-relay';

export default graphql`
  mutation loginUserMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
