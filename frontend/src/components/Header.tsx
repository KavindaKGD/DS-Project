import React, { useState } from 'react'
import {
  SearchIcon,
  ShoppingBagIcon,
  ArrowLeftIcon,
  MapPinIcon,
} from 'lucide-react'
export const Header = ({ onBackClick, cartCount, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [address, setAddress] = useState('123 Main St')
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {onBackClick ? (
            <button
              onClick={onBackClick}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeftIcon size={20} />
            </button>
          ) : (
            <div className="flex items-center text-gray-700">
              <MapPinIcon size={20} className="mr-2" />
              <div>
                <div className="text-sm font-medium">Delivery to</div>
                <div className="text-sm">{address}</div>
              </div>
            </div>
          )}
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <ShoppingBagIcon size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Food, groceries, drinks, etc"
            className="w-full p-3 pl-10 bg-gray-100 rounded-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
    </header>
  )
}
