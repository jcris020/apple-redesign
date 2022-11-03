export const fetchProducts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
    );

    // Store Data
    const data = await res.json();
    // Store array of products
    const products: Product[] = data.products

    return products;
};