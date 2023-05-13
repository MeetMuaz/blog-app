import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/blog/:blogId' element={<BlogDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
