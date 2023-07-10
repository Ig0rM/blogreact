import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticle } from '../redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';

const ArticleEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const article = useSelector(state => state.find(article => article.id === parseInt(id)));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setDescription(article.description);
      setAuthor(article.author);
      setTags(article.tags.join(', '));
    }
  }, [article]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const updatedInfo = {
      title,
      description,
      author,
      tags: tags.split(',').map(tag => tag.trim())
    };

    dispatch(updateArticle(parseInt(id), updatedInfo));
    navigate('/');
  }, [title, description, author, tags]);

  return article ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        value={tags}
        onChange={e => setTags(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  ) : (
    <p>Not found article</p>
  );
};

export default ArticleEdit;