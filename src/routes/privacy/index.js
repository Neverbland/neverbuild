import React from 'react';

// Components
import Layout from 'components/Layout';
import Page from 'components/Page';

// Content
import privacy from './privacy.md';

function action({ path }) {
  return {
    chunks: ['privacy'],
    title: privacy.title,
    component: (
      <Layout path={path}>
        <Page {...privacy} />
      </Layout>
    ),
  };
}

export default action;
