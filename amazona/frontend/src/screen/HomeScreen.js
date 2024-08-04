import React, { useEffect, useReducer, useState } from 'react';
// import data from '../data.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default function HomeScreen() {
  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({
          type: 'FETCH_SUCCESS',
          loading: false,
          payload: result.data,
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Feature Products</h2>
      <div className="products">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}
