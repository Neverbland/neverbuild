import React from 'react';

// Components
import Layout from 'components/Layout';
import Register from './Register';

const title = 'New User Registration';

function action({ path }) {
  return {
    chunks: ['register'],
    title,
    component: (
      <Layout path={path}>
        <Register title={title} />
      </Layout>
    ),
  };
}

export default action;
