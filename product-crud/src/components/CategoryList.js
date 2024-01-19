import axios from "axios";
import React, { useEffect, useState } from "react";
function CategoryList() {
  const [data, setResponse] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:3000/categories/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
      setResponse(response?.data);
    });
  }, []);
  const handleDelete = async (categoryId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/categories/${categoryId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponse((prevData) => ({
        ...prevData,
        categories: prevData.categories.filter((category) => category.id !== categoryId),
      }));
      console.log(`Category with ID ${categoryId} deleted:`, response.data);

    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div class="relative overflow-sm">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
            Category Name
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
           
            <th scope="col" class="px-6 py-3">
           Action
            </th>
         
          </tr>
        </thead>
        <tbody>
          {data?.categories?.map((item) => {
            return (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">{item?.name}</td>
                  <td class="px-6 py-4">{item?.type}</td>
                 
                  <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
