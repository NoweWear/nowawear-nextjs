// pages/api/products.js

export default async function handler(req, res) {
  const apiKey = process.env.PRINTIFY_API_KEY;

  const response = await fetch("https://api.printify.com/v1/shops.json", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const shops = await response.json();

  if (!shops || shops.length === 0) {
    return res.status(500).json({ error: "No shops found" });
  }

  const shopId = shops[0].id;

  const productsRes = await fetch(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const products = await productsRes.json();

  res.status(200).json(products);
      }
