import React from 'react';
import { Link } from 'react-router-dom';
import { articleSort } from '../util/articleSort';

export default (props) => {

  const articles = props.articles || [];
  const sortedList = articleSort(articles);

  // build nested lists
  const sidebar = sortedList.map((category, index) => {
    return (
      <li key={ index }>
        <span className="sidebar__topic">{ category[0].topic }</span>
        <ul className="sidebar__list">{
          category.map((post, i) => {
            return (
              <div>
                <Link key={i} className="blog__link" 
                  to={ `${props.navPath}/${post.nav_label}` }>
                  { post.title }
                </Link>
              </div>
            );
          })
        }</ul>
      </li>
    )
  });

console.log(sortedList);
  return (
    <div className="blog__col blog__sidebar">
      <h2 className="blog__browse">Browse Topics</h2>

      <ul className="sidebar">{sidebar}</ul>

    </div>
  );

}