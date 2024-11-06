import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://disc-product-demo-api.onrender.com/api/products"
        );
        const data = await response.json();
        const sortedData = data.sort(
          (a: Product, b: Product) => a.price - b.price
        );
        setProducts(sortedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
