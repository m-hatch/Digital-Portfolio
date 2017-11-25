import React from 'react';
import { Link } from 'react-router-dom';
import { articleSort } from '../util/articleSort';

export default (props) => {

  const articles = props.articles || [];
  const sortedList = articleSort(articles);

console.log(sortedList);
  return (
    <div className="blog__col blog__sidebar">
      <h2>Browse Topics</h2>

      <ul></ul>

      <Link className="blog__link" to={ `${props.navPath}/${articles[0].nav_label}` } >{ articles[0].topic }</Link>
    </div>
  );

}