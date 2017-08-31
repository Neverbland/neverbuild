import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Home.scss';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className="container">
        <h1>News!</h1>
        {this.props.news.map(item => (
          <article key={item.id} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={item.link}>{item.title}</a>
            </h1>
            <aside>
              <small>{item.author.name}</small>
            </aside>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(Home);
