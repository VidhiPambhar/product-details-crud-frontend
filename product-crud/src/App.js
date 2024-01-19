// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoutes';
import SignupForm from './components/SignUp';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/product/form" element={<ProductForm/>} />
        <Route path="/product/list" element={<ProductList/>} />
        <Route path="/dashboard/category/form" element={<CategoryForm/>} />
        <Route path="/category/list" element={<CategoryList/>} />
        {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
