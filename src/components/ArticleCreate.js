import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';

const ArticleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      title,
      description,
      author,
      tags: tags.split(',').map(tag => tag.trim())
    };

    dispatch(createArticle(newArticle));

    setTitle('');
    setDescription('');
    setAuthor('');
    setTags('');
    navigate('/');
  }, [title, description, author, tags]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        type="text"
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="Tags (separated by commas)"
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ArticleCreate;