import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import ProductForm from "./ProductForm";
import CategoryForm from "./CategoryForm";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-gray-500 p-4">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <div className="flex space-x-4 mt-2">
          <Link
            to="/dashboard/product/form"
            className="text-white hover:underline"
          >
            Product
          </Link>
          <Link
            to="/dashboard/category/form"
            className="text-white hover:underline"
          >
            Category
          </Link>
        </div>
      </div>

      <div className="flex-1 bg-white p-8">
        <Routes>
          <Route path="product" element={<ProductForm />} />
          <Route path="category" element={<CategoryForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
