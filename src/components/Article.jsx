import React from 'react';

export default (props) => {

  const articles = props.articles || [];
  const navLabel = props.match.params.navLabel;
  console.log(props);

  return (
    <div>
    Article
      { navLabel }
    </div>
  );

}