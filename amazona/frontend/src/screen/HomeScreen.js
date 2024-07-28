import React from 'react';
import data from '../data.js';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div>
      <h2>Feature Products</h2>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="productInfo">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price}</strong>
              </p>
              <button>AddtoCart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
