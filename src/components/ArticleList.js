import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import Article from './Article';

const ArticleList = () => {
  const articles = useSelector(state => state);

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