import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';


const ArticleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    id: Date.now(),
    title: '',
    description: '',
    author: '',
    tags: ''
  });

  const handleArticleChange = useCallback((e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    });
  }, [article]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const newArticle = {
      ...article,
      tags: article.tags.split(',').map(tag => tag.trim())
    };

    dispatch(createArticle(newArticle));
    navigate('/');
  }, [article]);

  return (

<Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="title"
          label="Title"
          value={article.title}
          onChange={handleArticleChange}
          required
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          name="description"
          label="Description"
          value={article.description}
          onChange={handleArticleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="author"
          label="Author"
          value={article.author}
          onChange={handleArticleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="tags"
          label="Tags"
          value={article.tags}
          onChange={handleArticleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">Create</Button>
      </form>
    </Container>

   
  );
};

export default ArticleCreate;