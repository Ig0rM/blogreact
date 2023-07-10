import { CREATE_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from '../actions/articleActions';

const initialState = [];

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      return state.filter(article => article.id !== action.payload);
    case UPDATE_ARTICLE:
      return state.map(article => 
        article.id === action.payload.articleId
          ? { ...article, ...action.payload }
          : article
      );
    default:
      return state;
  }
};

export default articleReducer;