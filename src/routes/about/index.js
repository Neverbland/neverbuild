import React from 'react';

// Components
import Layout from 'components/Layout';
import Page from 'components/Page';

// Content
import about from './about.md';

function action({ path }) {
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      <Layout path={path}>
        <Page {...about} />
      </Layout>
    ),
  };
}

export default action;
