import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/actions/articleActions';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteArticle(article.id));
  });

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>By User №: {article.userId}</p>
      <Link to={`/edit/${article.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Article;