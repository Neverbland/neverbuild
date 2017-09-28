import React from 'react';

// Components
import Layout from 'components/Layout';
import Contact from './Contact';

const title = 'Contact Us';

function action({ path }) {
  return {
    chunks: ['contact'],
    title,
    component: (
      <Layout path={path}>
        <Contact title={title} />
      </Layout>
    ),
  };
}

export default action;
