import React, { useEffect } from "react";
import "../Components/ProductView.css";

const ProductView = (props) => {
  useEffect(() => {
    props.GetProductAll(props.login.admin_id);
  }, []);
  console.log(props.login.admin_id);
  return (
    <>
      <div>
        {Array.isArray(props.viewProducts.all_view_Products) &&
          props.viewProducts.all_view_Products.map((items) => {
            return (
              <div>
                <h3>{items.name}</h3>
                <h3>{items.brand}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ProductView;
