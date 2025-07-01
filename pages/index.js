// pages/index.js

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>NoweWear Tişörtleri</h1>
      {products.length === 0 ? (
        <p>Ürünler yükleniyor...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: 20 }}>
              <img
                src={product.images?.[0]?.src}
                alt={product.title}
                style={{ width: 200, borderRadius: 10 }}
              />
              <h2>{product.title}</h2>
              <p>{product.description || "Açıklama yok."}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
