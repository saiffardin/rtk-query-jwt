export interface ProductType {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width?: number;
    height?: number;
    depth?: number;
  };
  thumbnail?: string;
}

export interface ProductRes {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
