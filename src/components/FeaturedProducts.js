const ProductCard = ({ product }) => (
  <div className="card h-100 shadow-sm hover-scale">
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top"
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body text-center">
      <h5 className="card-title fw-bold">{product.name}</h5>
      <p className="text-primary fw-bold">{product.price} MT</p>
      <button className="btn btn-primary w-100">Add to Cart</button>
    </div>
  </div>
);

const FeaturedProducts = ({ products }) => (
  <section className="container my-5">
    <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
