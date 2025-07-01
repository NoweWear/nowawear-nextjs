export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.printify.com/v1/shops.json', {
      headers: {
        Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
      },
    });

    const shops = await response.json();
    const shopId = shops[0]?.id;

    if (!shopId) {
      return res.status(500).json({ error: 'No shop found' });
    }

    const productsRes = await fetch(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
      headers: {
        Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
      },
    });

    const products = await productsRes.json();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products', details: err.message });
  }
}
