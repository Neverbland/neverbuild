import React from 'react';
import Layout from '../../components/Layout';
import Contact from './Contact';

const title = 'Contact Us';

function action() {
  return {
    chunks: ['contact'],
    title,
    component: (
      <Layout>
        <Contact title={title} />
      </Layout>
    ),
  };
}

export default action;
