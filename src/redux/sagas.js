import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ARTICLES, CREATE_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from './actions/articleActions';
import { fetchArticlesApi, createArticleApi, deleteArticleApi, updateArticleApi } from './api';

function* fetchArticlesSaga() {
  try {
    const response = yield call(fetchArticlesApi);
    yield put({ type: `${FETCH_ARTICLES}_SUCCESS`, payload: response.data });
  } catch (e) {
    yield put({ type: `${FETCH_ARTICLES}_FAILURE`, message: e.message });
  }
}

function* createArticleSaga(action) {
  try {
    const response = yield call(createArticleApi, action.payload);
    yield put({ type: `${CREATE_ARTICLE}_SUCCESS`, payload: response.data });
  } catch (e) {
    yield put({ type: `${CREATE_ARTICLE}_FAILURE`, message: e.message });
  }
}

function* deleteArticleSaga(action) {
  try {
    yield call(deleteArticleApi, action.payload);
    yield put({ type: `${DELETE_ARTICLE}_SUCCESS`, payload: action.payload });
  } catch (e) {
    yield put({ type: `${DELETE_ARTICLE}_FAILURE`, message: e.message });
  }
}

function* updateArticleSaga(action) {
  try {
    const response = yield call(updateArticleApi, action.payload.articleId, action.payload);
    yield put({ type: `${UPDATE_ARTICLE}_SUCCESS`, payload: response.data });
  } catch (e) {
    yield put({ type: `${UPDATE_ARTICLE}_FAILURE`, message: e.message });
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_ARTICLES, fetchArticlesSaga);
  yield takeEvery(CREATE_ARTICLE, createArticleSaga);
  yield takeEvery(DELETE_ARTICLE, deleteArticleSaga);
  yield takeEvery(UPDATE_ARTICLE, updateArticleSaga);
}

export default rootSaga;