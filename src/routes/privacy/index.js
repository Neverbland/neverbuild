import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import privacy from './privacy.md';

function action() {
  return {
    chunks: ['privacy'],
    title: privacy.title,
    component: (
      <Layout>
        <Page {...privacy} />
      </Layout>
    ),
  };
}

export default action;
