import { useEffect, useState } from "react";
import Product from "../product/Product";

const Products = () => {
  const [coldDrinks, setColdDrinks] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((data) => {
        const { drinks } = data;
        setColdDrinks(drinks);
      });
  }, []);
  let outPut = coldDrinks.map((drink, key) => (
    <Product key={key} drink={drink} />
  ));

  return <div className="w-[65%] grid grid-cols-3 gap-5 px-14 m-auto items-center justify-items-center">{outPut}</div>;
};

export default Products;
