import React from 'react';
import { getFormattedDate } from '../util/utilities';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.loadScript = this.loadScript.bind(this);
  }

  componentDidMount() {
    this.loadScript('/vendor/prism.js');
  }

  componentWillUpdate() {
    this.removeScript('vendor');
  }

  componentDidUpdate() {
    this.loadScript('/vendor/prism.js');
  }

  getArticle() {
    const articles = this.props.articles || [];
    const navLabel = this.props.match.params.navLabel;
    return articles.find((obj) => {
      return obj.nav_label === navLabel;
    });
  }

  loadScript(src) {
    const elem = document.createElement('script');
    elem.async = false;
    elem.src = src;
    elem.id = 'vendor';
    document.body.appendChild(elem);
  }

  removeScript(id) {
    const tag = document.getElementById(id);
    document.body.removeChild(tag);
  }

  render() {
    const date = new Date(this.getArticle().date);
    const htmlContent = { __html: this.getArticle().content } || '';

    return (
      <div className="article">

        <h1 className="l-section__heading blog__heading">{ this.getArticle().topic }:</h1>
        <h2 className="l-section__heading blog__heading">{ this.getArticle().title }</h2>

        <p className="l-italic article__date">Posted on { getFormattedDate(date) }</p>

        <div className="article__content"
          dangerouslySetInnerHTML={ htmlContent }>
        </div>

      </div>
    );
  }
}

export default Article;
