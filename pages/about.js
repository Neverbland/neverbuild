import Head from '../components/Head';
import Main from '../components/Main';
import Placeholder from '../components/Placeholder';

export default () => (
  <Main>
    <Head title="About" />
    <Placeholder columns="1 / 9" rows="1 / 2" />
    <Placeholder columns="9 / 13" rows="1 / 4" />
    <Placeholder columns="1 / 9" rows="2 / 3" />
    <Placeholder columns="1 / 9" rows="3 / 4" />
    <Placeholder columns="1 / 9" rows="4 / 5" />
  </Main>
);
