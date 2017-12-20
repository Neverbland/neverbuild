// Dependencies
import React from 'react';
// Styles
import styles from 'css/containers/home.scss';
// Components
import withSSR from '../HOC/withSSR';
// Services
import cms from '../services/cms';

const query = `{
  allNews {
    id
    title
    author {
      name
    }
    link
    content
  }
}`;

class Home extends React.Component {
  // This works similarly to Next.js's `getInitialProps`
  static async getInitialData() {
    return cms(query);
  }
  render() {
    const { isLoading, data, error } = this.props;
    return (
      <main className={styles.home}>
        <div className={styles.homeInner}>
          <h1>Home</h1>
          {isLoading && <div>Loading... </div>}
          {error && (
            <div style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</div>
          )}
          {data &&
            data.allNews.map((news, i) => (
              <div key={i}>
                <h2>
                  <a href={news.link}>{news.title}</a>
                </h2>
                <p>{news.author.name}</p>
                <p>{news.content}</p>
              </div>
            ))}
        </div>
      </main>
    );
  }
}

export default withSSR(Home);
