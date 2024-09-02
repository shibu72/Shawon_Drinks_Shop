/* eslint-disable react/prop-types */
const Product = ({ drink }) => {
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strImageAttribution,
  } = drink;

  return (
    <div>
      <div className="card card-compact backdrop-blur-xl w-[22rem] text-sm p-1 shadow-xl">
        <figure className="">
          <img src={strDrinkThumb} className="w-[100%] h-[20rem] rounded" alt={strImageAttribution}/>
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">{strDrink}</h2>
          <p className="flex items-center justify-between"> <span>{strGlass}</span> <span>{strCategory}</span></p>
          <div className="card-actions items-center justify-between">
            <button className="btn bg-transparent hover:bg-orange-500 border-none">Order Now</button>
            <a className="hover:link hover:text-orange-500">See Details...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
