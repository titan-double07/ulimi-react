
import React, { createContext, useState, useEffect, ReactNode } from "react";

export interface Product {
  SKU: number;
  Name: string;
  "Product Category": string;
  Title: string;
  Brand: string;
  Description: string;
  "Cost Price": number;
  Image_1: string;
  Quantity: number;
  size: string;
}

export interface ApiContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `http://3.88.1.181:8000/products/public/catalog/?supplier=FragranceX&search=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [query]);

  return (
    <ApiContext.Provider value={{ products, loading, error, setQuery }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
