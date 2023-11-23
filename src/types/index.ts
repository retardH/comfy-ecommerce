export type Cart = {
  cart: any[];
  totalItems: number;
  totalAmount: number;
  shippingFee: number;
};

export type ProductsState = {
  productsLoading: boolean;
  productsError: any;
  products: any[];
  featuredProducts: any[];
  singleProductLoading: boolean;
  singleProduct: any;
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