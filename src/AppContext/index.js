import { useCallback, createContext, useState, useEffect } from "react";
import axios from "../utils/axios";

export const Context = createContext();

export function Provider({ children }) {
  const restaurant = process.env.REACT_APP_RESTAURANT_ID;
  const [items, setItems] = useState([]);
  const [currency, setCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryID, setCategoryID] = useState("");

  const getItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/restaurant/${restaurant}`, {
        params: {
          cat: categoryID,
        },
      });
      const data = response.data.data;
      const items = data.items.data;
      setItems(items);
      setCurrency(data.currency);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [restaurant, categoryID, setCurrency, setItems]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const data = {
    items,
    setItems,
    currency,
    setCurrency,
    loading,

    categoryID,
    setCategoryID,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}
