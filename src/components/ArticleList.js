import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import Article from './Article';
import { fetchArticles } from '../redux/actions/articleActions';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state);
  
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <List>
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          <ListItem alignItems="flex-start">
            <Article article={article} />
          </ListItem>
          {index < articles.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ArticleList;