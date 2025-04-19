import React from 'react'
const categories = [
  {
    id: 1,
    name: 'Deals',
    icon: '🔥',
  },
  {
    id: 2,
    name: 'Fast Food',
    icon: '🍔',
  },
  {
    id: 3,
    name: 'Healthy',
    icon: '🥗',
  },
  {
    id: 4,
    name: 'Pizza',
    icon: '🍕',
  },
  {
    id: 5,
    name: 'Sushi',
    icon: '🍣',
  },
  {
    id: 6,
    name: 'Chinese',
    icon: '🥡',
  },
  {
    id: 7,
    name: 'Mexican',
    icon: '🌮',
  },
  {
    id: 8,
    name: 'Dessert',
    icon: '🍰',
  },
]
export const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="overflow-x-auto py-3">
      <div className="flex space-x-3 px-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              onSelectCategory(
                category.id === selectedCategory ? null : category.id,
              )
            }
            className={`flex flex-col items-center px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedCategory === category.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
