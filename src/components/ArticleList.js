import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

const ArticleList = () => {
  const articles = useSelector(state => state);

  return (
    <div>
      {articles.map(article => <Article key={article.id} article={article} />)}
    </div>
  );
};

export default ArticleList;