import { useEffect, useState } from "react";
import Product from "./product";

function NewArrivals({ foryous }) {
  const token = "1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc";
  const [newarrivals, setNewArrivals] = useState([]);

  useEffect(async () => {
    const res = await fetch("https://kasi.ebhusan.xyz/api/new-arrivals", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setNewArrivals(data);
  }, []);

  return (
    <>
      {newarrivals.map((single) => {
        return (
          <Product
            key={single.product_id}
            image={single.product_image_url}
            name={single.product_name}
            id={single.product_id}
            currency_type={single.product_price_currency_type}
            price={`${single.product_price_currency_type}${single.product_price}`}
          />
        );
      })}
    </>
  );
}
export default NewArrivals;
