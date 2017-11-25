export function articleSort(articles) {
  const categories = {};
  const sortedList = [];

  // push articles into topic arrays
  articles.forEach((article) => {
    if (categories.hasOwnProperty(article.topic)) {
      categories[article.topic].push(article);
    } else {
      categories[article.topic] = [article];
    }
  });

  // sort arrays by date
  for (let topic in categories) {
    categories[topic].sort((a,b) => (
      new Date(a.date) - new Date(b.date))
    );
  }

  // push categories into array
  for (let category in categories) {
    sortedList.push(categories[category]);
  }

  return sortedList;
}