import React from 'react'
import { PlusIcon } from 'lucide-react'
export const FoodItem = ({ item, onAddToCart }) => {
  return (
    <div className="flex justify-between py-4 border-b border-gray-200">
      <div className="flex-1 pr-4">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <p className="mt-2 font-medium">${item.price.toFixed(2)}</p>
      </div>
      <div className="relative">
        {item.imageUrl && (
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <button
              onClick={() => onAddToCart(item)}
              className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            >
              <PlusIcon size={18} />
            </button>
          </div>
        )}
        {!item.imageUrl && (
          <button
            onClick={() => onAddToCart(item)}
            className="mt-2 bg-white border border-gray-300 rounded-full p-2 shadow-sm hover:bg-gray-50"
          >
            <PlusIcon size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
