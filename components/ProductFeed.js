import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(({ id, category, description, image, price, title }) => (
        <Product
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
