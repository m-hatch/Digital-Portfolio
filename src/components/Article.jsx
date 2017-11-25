import React from 'react';
import { getFormattedDate } from '../util/utilities';

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

      <h1 className="l-section__heading">{ article.topic }:</h1>
      <h2 className="l-section__heading">{ article.title }</h2>

      <p className="article__date">Posted on { getFormattedDate(date) }</p>

      <div className="article__content"
        dangerouslySetInnerHTML={ htmlContent }>
      </div>

    </div>
  );

}