import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h2>Latest Products</h2>
      </main>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="productInfo">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
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

export default App;
