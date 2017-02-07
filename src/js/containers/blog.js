import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import httpService from '../services/http-service';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentWillMount() {
    httpService('//offline-news-api.herokuapp.com/stories/')
      .then(res => {
        this.setState({
          articles: res
        });
      });
  }
  render() {
    return (
      <div>
        <Helmet title="Blog" />
        <h1>Blog</h1>
        <ul>
          {this.state.articles.map(article =>
            <li key={article.guid}>
              <Link to={`/blog/${article.guid}`}>{article.title}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Blog;
