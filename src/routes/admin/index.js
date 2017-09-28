import React from 'react';

// Components
import Layout from 'components/Layout';
import Admin from './Admin';

const title = 'Admin Page';
const isAdmin = false;

function action({ path }) {
  if (!isAdmin) {
    return { redirect: '/login' };
  }

  return {
    chunks: ['admin'],
    title,
    component: (
      <Layout path={path}>
        <Admin title={title} />
      </Layout>
    ),
  };
}

export default action;
