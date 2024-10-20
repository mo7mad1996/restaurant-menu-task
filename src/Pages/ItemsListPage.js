import React, { useState, useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router";
import { Context } from "../AppContext";

// components
import Loading from "../components/Loading";
import Search from "../components/Search";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

const ItemsListPage = () => {
  // data
  const [search, setSearch] = useState("");
  const { categoryID } = useParams();
  const { items, currency, loading, setCategoryID } = useContext(Context);

  useEffect(() => {
    setCategoryID(categoryID);
  }, [categoryID, setCategoryID]);

  // render
  if (loading) return <Loading />;

  return (
    <>
      <Search
        value={search}
        update={setSearch}
        placeholder="Search for Dishes, Drinks ..."
      />
      <Outlet />

      {items.length && !loading ? (
        <div className="items-layout">
          <div>
            {items.map((item) => (
              <ItemCard item={item} key={item.id} categoryID={categoryID} />
            ))}
          </div>
        </div>
      ) : (
        <h3 className="noItems">No Items</h3>
      )}

      <Footer currency={currency} />
    </>
  );
};

export default ItemsListPage;
