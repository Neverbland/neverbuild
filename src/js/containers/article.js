import React, { Component } from 'react';
import Helmet from 'react-helmet';
import httpService from '../services/http-service';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }
  componentWillMount() {
    const guid = this.props.params.guid;
    httpService(`//offline-news-api.herokuapp.com/stories/${guid}`)
      .then(res => {
        this.setState({
          article: res
        });
      });
  }
  render() {
    const { article } = this.state;
    return (
      <div>
        <Helmet title={article.title} />
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    );
  }
}

export default Article;
