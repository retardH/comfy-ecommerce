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
  // name,
  // price,
  // description,
  // stock,
  // stars,
  // reviews,
  // id: sku,
  // company,
  // images,
  name: string;
  price: string | number;
  description: string;
  stock: any;
  stars: any;
  reviews: any;
  sku: any;
  company: string;
  images: any;
};
