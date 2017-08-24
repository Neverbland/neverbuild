import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="https://gitter.im/kriasoft/react-starter-kit"
          >
            Ask a question
          </a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/kriasoft/react-starter-kit/issues/new"
          >
            Report an issue
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
