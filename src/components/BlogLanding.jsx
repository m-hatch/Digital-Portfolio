import React from 'react';
import { Link } from 'react-router-dom';
import { getFormattedDate } from '../util/utilities';

export default (props) => {

  const blog = props.blog || {};
  const articles = props.blog.articles || [];
  const navLabel = props.match.params.navLabel;
  const recent = articles.sort((a,b) => (
    new Date(b.date) - new Date(a.date))
  )[0];
  const date = new Date(recent.date);
  const teaser = recent.content.match(/<p>(.*?)<\/p>/g)[0];
  //const teaser = paragraphs[0].replace(/<\/?p>/g,'');
  const htmlContent = { __html: teaser } || '';

  return (
    <div>

      <h1 className="l-section__heading blog__heading">{ blog.heading }</h1>
      <p className="blog__description">{ blog.description }</p>

      <div className="blog__recent">
        <h2>Recent posts</h2>
      </div>

      <div className="article">

        <h3 className="article__recent">
          { `${recent.topic}: ${recent.title}` }
        </h3>

        <div className="article__content"
          dangerouslySetInnerHTML={ htmlContent }>
        </div>

        <Link className="blog__link" to={ `${props.navPath}/${recent.nav_label}` }>
          [Read more]
        </Link>

        <p className="l-italic article__date">
          Posted on { getFormattedDate(date) }
        </p>

      </div>

    </div>
  );

}