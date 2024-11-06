import React from "react";
import useProducts from "./hooks/useProducts";

const App: React.FC = () => {
  const products = useProducts();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image_url}
            alt={product.name}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

// bad example
// import React, { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image_url: string;
// }

// const App: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "https://disc-product-demo-api.onrender.com/api/products"
//         );
//         const data = await response.json();
//         const sortedData = data.sort(
//           (a: Product, b: Product) => a.price - b.price
//         ); // Sorting by price
//         setProducts(sortedData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gap: "20px",
//         padding: "20px",
//       }}
//     >
//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: "1px solid #ddd",
//             padding: "10px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src={product.image_url}
//             alt={product.name}
//             style={{ width: "100%", height: "150px", objectFit: "cover" }}
//           />
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
