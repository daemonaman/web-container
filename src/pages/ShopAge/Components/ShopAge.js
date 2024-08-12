import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const ShopAge = (props) => {
  const [filterData, setfilterData] = useState([]);
  useEffect(() => {
    props.ViewFilterAge(props.login.admin_id);
  }, []);
  return (
    <>
      <div>
        <h2>Age 0-6 years products are Showing</h2>
        {Array.isArray(props.age.all_filterage_products) &&
          props.age.all_filterage_products.map((filled) => {
            return <></>;
          })}
      </div>
    </>
  );
};
export default ShopAge;
