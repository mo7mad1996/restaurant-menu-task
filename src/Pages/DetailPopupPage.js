import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Context } from "../AppContext";

// components
import Loading from "../components/Loading";
import ItemDetailPopup from "../components/ItemDetailPopup";

function DetailPopupPage() {
  // config
  const navigate = useNavigate();
  const { categoryID, itemID } = useParams();

  // data
  const [item, setItem] = useState(null);
  const { items, loading, setCategoryID } = useContext(Context);

  // methods
  const onClose = () => navigate(`/${categoryID}`);

  // onInit
  useEffect(() => {
    setCategoryID(categoryID);
    if (items.length) {
      const item = items.find((e) => e.id.toString() === itemID);
      setItem(item);
    }
  }, [items, itemID, categoryID, setCategoryID]);

  if (loading) return <Loading />;
  if (!item) return <div>Item not found, Please select one</div>;
  return <ItemDetailPopup item={item} onClose={onClose} />;
}
export default DetailPopupPage;
