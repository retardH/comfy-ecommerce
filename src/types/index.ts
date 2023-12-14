export type Cart = {
  cart: any[];
  totalItems: number;
  totalAmount: number;
  shippingFee: number;
};

export type ProductsState = {
  productsLoading: boolean;
  productsError: any;
  products: Product[];
  featuredProducts: any[];
  singleProductLoading: boolean;
  singleProduct: Product;
  singleProductError: any;
};

export type FilterState = {
  filteredProducts: any[];
  allProducts: any[];
  gridView: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    minPrice: number;
    maxPrice: number;
    price: number;
    shipping: boolean;
  };
};

export type Product = {
  id: string;
  name: string;
  price: number;
  featured: boolean;
  colors: string[];
  description: string;
  stock: number;
  shipping: boolean;
  stars: number;
  reviews: number;
  sku: any;
  company: string;
  images: any;
};
