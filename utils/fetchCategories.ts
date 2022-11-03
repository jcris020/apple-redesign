export const fetchCategories = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
    );

    // Store Data
    const data = await res.json();
    // Store array of categories
    const categories: Category[] = data.categories

    return categories;
};