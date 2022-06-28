import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import About from "./pages/about";
import ArticleDetail from "./pages/article-detail";
import ArticleList from "./pages/article-list";
import Auth from "./pages/auth";
import Home from "./pages/home";

import { store, persistor } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/article/list" element={<ArticleList />} />
            <Route
              exact
              path="/article/detail/:id"
              element={<ArticleDetail />}
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
