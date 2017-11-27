import React from 'react';
import { getFormattedDate } from '../util/utilities';
import Prism from '../vendor/prism.js';

export default (props) => {

  const articles = props.articles || [];
  const navLabel = props.match.params.navLabel;
  const article = articles.find((obj) => {
    return obj.nav_label === navLabel;
  });
  const date = new Date(article.date);
  const htmlContent = { __html: article.content } || '';

  return (
    <div className="article">

      <h1 className="l-section__heading blog__heading">{ article.topic }:</h1>
      <h2 className="l-section__heading blog__heading">{ article.title }</h2>

      <p className="l-italic article__date">Posted on { getFormattedDate(date) }</p>

      <div className="article__content"
        dangerouslySetInnerHTML={ htmlContent }>
      </div>

    </div>
  );

}