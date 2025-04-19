import React from 'react'
import { StarIcon, ClockIcon } from 'lucide-react'
export const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="cursor-pointer mb-4" onClick={() => onClick(restaurant)}>
      <div className="relative">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
          {restaurant.deliveryTime} min
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{restaurant.name}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <div className="flex items-center mr-2">
            <StarIcon size={16} className="text-black mr-1" fill="black" />
            <span>{restaurant.rating}</span>
          </div>
          <span>•</span>
          <span className="mx-2">{restaurant.priceCategory}</span>
          <span>•</span>
          <span className="ml-2">{restaurant.cuisine}</span>
        </div>
        <div className="text-sm mt-1 text-gray-600">
          <span>{restaurant.deliveryFee} delivery fee</span>
        </div>
      </div>
    </div>
  )
}
