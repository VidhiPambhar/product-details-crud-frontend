import axios from "axios";
import React, { useEffect, useState } from "react";
function ProductList() {
  const [data, setResponse] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:3000/products/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setResponse(response?.data);
      });
  }, []);
  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/products/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(`Product with ID ${productId} deleted:`, response.data);

      setResponse((prevData) => ({
        ...prevData,
        products: prevData.products.filter(
          (product) => product.id !== productId
        ),
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div class="relative overflow-sm">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product Name
            </th>
            <th scope="col" class="px-6 py-3">
              Image URL
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Category Name
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((item) => {
            return (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">{item?.name}</td>
                  <td class="px-6 py-4">{item?.imageUrl}</td>
                  <td class="px-6 py-4">{item?.description}</td>
                  <td class="px-6 py-4">{item?.category_id}</td>
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

export default ProductList;
