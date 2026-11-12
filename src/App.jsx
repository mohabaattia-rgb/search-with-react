import { useState } from "react";
import "./assets/style.css";

function App() {
  const [search, setSearch] = useState("");

  // Products Data
 const products = [
   {
     id: 1,
     name: "Headphones",
     price: 50,
     category: "Audio",
    image: import.meta.env.BASE_URL + "headphone.jpg",
   },
   {
     id: 2,
     name: "Smart Watch",
     price: 80,
     category: "Wearables",
   image: import.meta.env.BASE_URL + "/smartwatch.jpg",
   },
   {
     id: 3,
     name: "Keyboard",
     price: 35,
     category: "Accessories",
    image: import.meta.env.BASE_URL + "/keyboard.jpg",
   },
   {
     id: 4,
     name: "Mouse",
     price: 20,
     category: "Accessories",
  image: import.meta.env.BASE_URL +  "/mouse.jpg",
   },
   {
     id: 5,
     name: "Laptop",
     price: 500,
     category: "Computers",
    image: import.meta.env.BASE_URL + "/labtob.jpg",
   },
   {
     id: 6,
     name: "Monitor",
     price: 150,
     category: "Computers",
  image: import.meta.env.BASE_URL +  "/monitor.jpg",
   },
 ];

  // Filter Products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Our Products</h1>
        <p>Find your favorite products</p>
      </header>

      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Cards */}
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="card-info">
              <span className="category">{product.category}</span>

              <h2>{product.name}</h2>

              <div className="card-bottom">
                <h3>${product.price}</h3>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h2>No Products Found!</h2>
          <p>Try searching for another product.</p>
        </div>
      )}
    </div>
  );
}

export default App;
