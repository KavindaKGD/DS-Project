import React, { useState } from 'react'
import { CategoryFilter } from '../components/CategoryFilter'
import { RestaurantCard } from '../components/RestaurantCard'
const restaurants = [
  {
    id: 1,
    name: 'Burger Palace',
    cuisine: 'American',
    rating: 4.7,
    deliveryTime: 25,
    deliveryFee: '$0.99',
    priceCategory: '$$',
    categoryId: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Fresh Greens',
    cuisine: 'Healthy',
    rating: 4.9,
    deliveryTime: 30,
    deliveryFee: '$1.99',
    priceCategory: '$$$',
    categoryId: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Sushi Zone',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: 35,
    deliveryFee: '$2.99',
    priceCategory: '$$$',
    categoryId: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Pizza Express',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: 20,
    deliveryFee: '$0.49',
    priceCategory: '$$',
    categoryId: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Taco Time',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: 15,
    deliveryFee: '$1.49',
    priceCategory: '$',
    categoryId: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Sweet Treats',
    cuisine: 'Dessert',
    rating: 4.9,
    deliveryTime: 25,
    deliveryFee: '$2.49',
    priceCategory: '$$',
    categoryId: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
]
export const Home = ({ onSelectRestaurant }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const filteredRestaurants = selectedCategory
    ? restaurants.filter(
        (restaurant) => restaurant.categoryId === selectedCategory,
      )
    : restaurants
  return (
    <main className="flex-1 container mx-auto pb-20">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="px-4 mt-4">
        <h2 className="text-2xl font-bold mb-4">All restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={onSelectRestaurant}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
