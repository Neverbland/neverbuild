import React from 'react';

// Components
import Layout from 'components/Layout';
import NotFound from './NotFound';

const title = 'Page Not Found';

function action({ path }) {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <Layout path={path}>
        <NotFound title={title} />
      </Layout>
    ),
    status: 404,
  };
}

export default action;
