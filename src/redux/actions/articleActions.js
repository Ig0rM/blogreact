export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const FETCH_ARTICLES = "FETCH_ARTICLES";

export const fetchArticles = () => ({
  type: FETCH_ARTICLES
});

export const createArticle = (article) => ({
  type: CREATE_ARTICLE,
  payload: article
});

export const deleteArticle = (articleId) => ({
  type: DELETE_ARTICLE,
  payload: articleId
});

export const updateArticle = (articleId, updatedInfo) => ({
  type: UPDATE_ARTICLE,
  payload: { articleId, ...updatedInfo }
});