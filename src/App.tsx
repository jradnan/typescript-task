import "./App.css";
import Product from "./components/Product";
const products = [
  {
    productName: "Product 1",
    price: 19.99,
    description: "Description for Product 1",
    imageURL:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 2",
    price: 29.99,
    description: "Description for Product 2",
    imageURL:
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 3",
    price: 39.99,
    description: "Description for Product 3",
    imageURL:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 4",
    price: 49.99,
    description: "Description for Product 4",
    imageURL:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 5",
    price: 59.99,
    description: "Description for Product 5",
    imageURL:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 6",
    price: 69.99,
    description: "Description for Product 6",
    imageURL:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 7",
    price: 79.99,
    description: "Description for Product 7",
    imageURL:
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 8",
    price: 89.99,
    description: "Description for Product 8",
    imageURL:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    productName: "Product 9",
    price: 99.99,
    description: "Description for Product 9",
    imageURL:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function App() {
  return (
    <>
      <div className="bg-yellow-500 grid md:grid-cols-2 lg:grid-cols-3 gap-11">
        {products.map((pd) => (
          <Product
            name={pd.productName}
            description={pd.description}
            price={pd.price}
            imageURL={pd.imageURL}
          ></Product>
        ))}
      </div>
    </>
  );
}

export default App;
