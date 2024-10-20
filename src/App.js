import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Layout from "./Layout/mainLayout.js";

// Pages
import CategoriesPage from "./Pages/CategoriesPage";
import ItemsListPage from "./Pages/ItemsListPage";
import DetailPopupPage from "./Pages/DetailPopupPage.js";

// context
import { Provider } from "./AppContext";

function App() {
  return (
    <Router>
      <Provider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<CategoriesPage />} />
            <Route path="/:categoryID" element={<ItemsListPage />}>
              <Route path=":itemID" element={<DetailPopupPage />} />
            </Route>
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
