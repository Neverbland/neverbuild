import React from 'react';

// Components
import Layout from 'components/Layout';
import Login from './Login';

const title = 'Log In';

function action({ path }) {
  return {
    chunks: ['login'],
    title,
    component: (
      <Layout path={path}>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
