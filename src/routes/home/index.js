import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

import query from './news.gql';

async function action({ fetch }) {
  const resp = await fetch(
    'https://api.graphcms.com/simple/v1/cj66o7yvu204y01873bfyb7v9',
    {
      body: JSON.stringify({
        query,
      }),
    },
  );
  const { data } = await resp.json();
  if (!data || !data.allNews) throw new Error('Failed to load the news feed.');
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
