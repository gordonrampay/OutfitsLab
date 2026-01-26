import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  tag?: string;
  category: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        {product.tag && (
          <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
            {product.tag}
          </span>
        )}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100"
        >
          {/* <Heart
            size={16}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          /> */}
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
        <p className="text-lg font-bold text-gray-900 mb-3">${product.price}</p>
        <div className="flex gap-2">
          <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
            {/* <ShoppingCart size={16} /> */}
            Buy Now
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            {/* <Heart size={16} className="text-gray-600" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};