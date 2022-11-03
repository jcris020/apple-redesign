export const fetchLineItems = async (sessionId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${sessionId}`
    );
  
    if (!res.ok) return;
  
    // Store Data
    const data = await res.json();
    // Store product data
    const products = data.session.data;
  
    return products;
  };
  