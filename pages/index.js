import Head from '../components/Head';
import Main from '../components/Main';
import Placeholder from '../components/Placeholder';

export default () => (
  <Main>
    <Head />
    {[...Array(12)].map((_, i) => <Placeholder key={i} columns="span 4" />)}
  </Main>
);
