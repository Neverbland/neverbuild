import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

import { api } from '../../config';
import query from './news.gql';

async function action({ fetch }) {
  const resp = await fetch(api.graphcms, {
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.allNews)
    throw new Error('Failed to load the news feed.', resp);
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    description: 'Hello',
    component: (
      <Layout>
        <Home news={data.allNews} />
      </Layout>
    ),
  };
}

export default action;
