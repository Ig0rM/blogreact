import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ArticleCreate from './components/ArticleCreate';
import ArticleList from './components/ArticleList';
import ArticleEdit from './components/ArticleEdit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>React Redux Blog App</h1>
          <Link to="/create">Create New Article</Link>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/create" element={<ArticleCreate />} />
            <Route path="/edit/:id" element={<ArticleEdit />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;