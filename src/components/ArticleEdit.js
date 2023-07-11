import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticle } from '../redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const ArticleEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const foundArticle = useSelector(state => state.find(article => article.id === parseInt(id)));

  const [article, setArticle] = useState({
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

  useEffect(() => {
    if (foundArticle) {
      setArticle({
        title: foundArticle.title,
        description: foundArticle.description,
        author: foundArticle.author,
        tags: foundArticle.tags.join(', ')
      });
    }
  }, [foundArticle]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const updatedInfo = {
      ...article,
      tags: article.tags.split(',').map(tag => tag.trim())
    };

    dispatch(updateArticle(parseInt(id), updatedInfo));
    navigate('/');
  }, [article]);

  return foundArticle ? (
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
        <Button variant="contained" color="primary" type="submit">Update</Button>
      </form>
    </Container>
  ) : (
    <Typography variant="h6" color="textSecondary" align="center">
      Article not found
    </Typography>
  );
};

export default ArticleEdit;