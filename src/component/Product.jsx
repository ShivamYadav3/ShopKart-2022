import { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const types = await fetch("https://fakestoreapi.com/products/categories");
      if (types.ok) {
        const data = await types.json();
        setCategory(data);
      } else {
        throw new Error("Something Went Wrong");
      }

      const productFetch = await fetch("https://fakestoreapi.com/products");
      if (productFetch.ok) {
        const productData = await productFetch.json();
        setProduct(productData);
      } else {
        throw new Error("Something Went Wrong");
      }
    };
    getData();
  }, []);

  const prevProduct = () => {
    setStart((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextProduct = () => {
    setStart((prev) => (prev === product.length - 2 ? 0 : prev + 1));
  };

  return (
    <div className="product-container normal">
      <div className="arrows normal">
        <div className="products-main normal">
          <p className="product-head normal">New products</p>
          <p className="star normal">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 2"
                d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z"
                fill="#161615"
              />
            </svg>
          </p>
        </div>
        <div className="arrow-main">
          <p style={{ cursor: "pointer" }} onClick={prevProduct}>
            <svg
              width="59"
              height="6"
              viewBox="0 0 59 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M58 3.5H58.5V2.5H58V3.5ZM0 3L5 5.88675V0.113249L0 3ZM58 2.5L4.5 2.5V3.5L58 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </p>
          <p style={{ cursor: "pointer" }} onClick={nextProduct}>
            <svg
              width="70"
              height="6"
              viewBox="0 0 70 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 1"
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM70 3L65 0.113249V5.88675L70 3ZM1 3.5L65.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="categories">
        <div className="category">
          {category.map((items, i) => {
            return (
              <p key={i} className="elem">
                {items}
              </p>
            );
          })}
        </div>
        <div className="items">
          <div className="item-main">
            {product.slice(start, product.length).map((products, index) => {
              const { id, title, price, description, image } = products;
              return (
                <div key={id} className="cards">
                  <div className="">
                    <img src={image} alt={image} className="product-image" />
                  </div>
                  <div className="product-main">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <p className="price">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobile">
          <p style={{ cursor: "pointer" }} onClick={prevProduct}>
            <svg
              width="59"
              height="6"
              viewBox="0 0 59 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M58 3.5H58.5V2.5H58V3.5ZM0 3L5 5.88675V0.113249L0 3ZM58 2.5L4.5 2.5V3.5L58 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </p>
          <p style={{ cursor: "pointer" }} onClick={nextProduct}>
            <svg
              width="70"
              height="6"
              viewBox="0 0 70 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 1"
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM70 3L65 0.113249V5.88675L70 3ZM1 3.5L65.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Product;
