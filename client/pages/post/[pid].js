import { fetchQuery, ReactRelayContext } from 'react-relay';

import postPageQuery from '../../queries/postPage';
import initEnvironment from '../../lib/createRelayEnvironment';
import FullPost from '../../components/FullPost';

let environment = initEnvironment();

export async function getServerSideProps(ctx) {
  const { pid } = ctx.params;
  const queryProps = await fetchQuery(environment, postPageQuery, { id: pid });

  return {
    props: {
      post: queryProps.link,
    },
  };
}

export default ({ post }) => {
  const records = environment.getStore().getSource().toJSON();
  environment = initEnvironment({ records });

  return (
    <ReactRelayContext.Provider value={{ environment, variables: {} }}>
      <FullPost {...post} />
    </ReactRelayContext.Provider>
  );
};
