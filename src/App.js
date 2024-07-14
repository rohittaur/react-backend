import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import BlogslistView from "./pages/blogslist";
import CreateBlog from './pages/create';
import EditPage from './pages/new-blog-page';
import BlogDetail from './pages/view-blog';
import Header from './component/header';

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="container mt-4 mb-4">
            <Header />
          </div>
          <Routes>
            <Route
              path={"/"}
              exact={true}
              element={<BlogslistView />}
            />
            <Route
              path={"/create"}
              exact={true}
              element={<CreateBlog />}
            />
            <Route
              path={"/new-page"}
              exact={true}
              element={<EditPage />}
            />
            <Route
              path="details/:Id"
              exact={true}
              element={<BlogDetail />}
            />
            <Route
              path={"*"}
              exact={true}
              element={<div>No page Found</div>}
            />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
