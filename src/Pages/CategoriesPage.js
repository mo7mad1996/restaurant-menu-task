import React, { useCallback, useEffect, useState } from "react";

import axios from "../utils/axios";

// components
import Loading from "../components/Loading";
import Search from "../components/Search";
import CategoryCard from "../components/CategoryCard";

const CategoriesPage = () => {
  // data
  const restaurant = process.env.REACT_APP_RESTAURANT_ID;
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // methods
  const fetchCategories = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get("/restaurant/categories/" + restaurant);
      setCategories(response.data.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }, [restaurant]);

  // onInit
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // render
  if (loading) return <Loading />;

  return (
    <>
      <Search
        value={search}
        update={setSearch}
        placeholder="Search for Categories..."
      />
      <div className="categories-grid">
        {categories.map((cat) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </>
  );
};

export default CategoriesPage;
