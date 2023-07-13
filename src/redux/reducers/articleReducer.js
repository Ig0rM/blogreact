import { CREATE_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE, FETCH_ARTICLES } from '../actions/articleActions';

const initialState = [];

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case `${CREATE_ARTICLE}_SUCCESS`:
      return [...state, action.payload];
    case `${CREATE_ARTICLE}_FAILURE`:
      return state;
    case `${DELETE_ARTICLE}_SUCCESS`:
      return state.filter(article => article.id !== action.payload);
    case `${DELETE_ARTICLE}_FAILURE`:
      return state;
    case `${UPDATE_ARTICLE}_SUCCESS`:
      return state.map(article => 
        article.id === action.payload.articleId
          ? { ...article, ...action.payload }
          : article
      );
    case `${UPDATE_ARTICLE}_FAILURE`:
      return state;
    case `${FETCH_ARTICLES}_SUCCESS`:
      return action.payload;
    case `${FETCH_ARTICLES}_FAILURE`:
      return state;
    default:
      return state;
  }
};

export default articleReducer;