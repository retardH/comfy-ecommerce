export type Cart = {
  cart: CartItem[];
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
  singleProduct: SingleProduct;
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
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
};

export type SingleProduct = {
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

export type CartItem = {
  id: string;
  name: string;
  color: string;
  amount: number;
  image: any;
  price: number;
  max: number;
};
