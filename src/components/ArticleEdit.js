import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticle, fetchArticles } from '../redux/actions/articleActions';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const ArticleEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const foundArticle = useSelector(state => { 
    return state.find(article => article.id === parseInt(id))
  });

  const [article, setArticle] = useState({
    title: '',
    body: '',
    userId: ''
  });

  const handleArticleChange = useCallback((e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    });
  }, [article]);

  useEffect(() => {
    dispatch(fetchArticles());
    if (foundArticle) {
      setArticle({
        title: foundArticle.title,
        body: foundArticle.body,
        userId: foundArticle.userId,
      });
    }
  }, [foundArticle, dispatch]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const updatedInfo = {
      ...article
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
          name="body"
          label="Description"
          value={article.body}
          onChange={handleArticleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="userId"
          label="Author"
          value={article.userId}
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