import React, { useEffect, useState } from 'react'
import { FoodItem } from '../components/FoodItem'
import { StarIcon, ClockIcon } from 'lucide-react'
const restaurantMenus = {
  'Burger Palace': [
    {
      id: 1,
      name: 'Popular Items',
      items: [
        {
          id: 101,
          name: 'Classic Cheeseburger',
          description:
            '100% Angus beef patty with cheese, lettuce, tomato, and special sauce',
          price: 12.99,
          imageUrl:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'Bacon Deluxe Burger',
          description:
            'Premium beef patty with crispy bacon, cheddar, and BBQ sauce',
          price: 14.99,
          imageUrl:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
    {
      id: 2,
      name: 'Burgers',
      items: [
        {
          id: 201,
          name: 'Mushroom Swiss Burger',
          description:
            'Sautéed mushrooms and Swiss cheese on our signature patty',
          price: 13.99,
          imageUrl:
            'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 202,
          name: 'Veggie Burger',
          description: 'Plant-based patty with fresh vegetables and vegan mayo',
          price: 11.99,
          imageUrl:
            'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
  'Fresh Greens': [
    {
      id: 1,
      name: 'Signature Salads',
      items: [
        {
          id: 101,
          name: 'Superfood Bowl',
          description: 'Quinoa, kale, avocado, chickpeas, and tahini dressing',
          price: 15.99,
          imageUrl:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'Mediterranean Salad',
          description:
            'Mixed greens, feta, olives, tomatoes, and balsamic vinaigrette',
          price: 13.99,
          imageUrl:
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
  'Sushi Zone': [
    {
      id: 1,
      name: 'Popular Rolls',
      items: [
        {
          id: 101,
          name: 'Dragon Roll',
          description: 'Eel, cucumber, avocado with unagi sauce',
          price: 16.99,
          imageUrl:
            'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'Rainbow Roll',
          description: 'California roll topped with assorted sashimi',
          price: 18.99,
          imageUrl:
            'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
  'Pizza Express': [
    {
      id: 1,
      name: 'Classic Pizzas',
      items: [
        {
          id: 101,
          name: 'Margherita Pizza',
          description: 'Fresh tomato sauce, mozzarella, and basil',
          price: 14.99,
          imageUrl:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'Pepperoni Pizza',
          description: 'Classic pepperoni with mozzarella and tomato sauce',
          price: 16.99,
          imageUrl:
            'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
  'Taco Time': [
    {
      id: 1,
      name: 'Signature Tacos',
      items: [
        {
          id: 101,
          name: 'Street Tacos',
          description:
            'Three corn tortillas with carne asada, onions, and cilantro',
          price: 11.99,
          imageUrl:
            'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'Fish Tacos',
          description: 'Battered fish, cabbage slaw, and chipotle crema',
          price: 13.99,
          imageUrl:
            'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
  'Sweet Treats': [
    {
      id: 1,
      name: 'Popular Desserts',
      items: [
        {
          id: 101,
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center',
          price: 8.99,
          imageUrl:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 102,
          name: 'New York Cheesecake',
          description: 'Classic cheesecake with berry compote',
          price: 7.99,
          imageUrl:
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  ],
}
export const RestaurantDetail = ({ restaurant, onAddToCart }) => {
  const [activeSection, setActiveSection] = useState(null)
  const [menuCategories, setMenuCategories] = useState([])
  useEffect(() => {
    if (restaurant && restaurant.name) {
      const restaurantMenu = restaurantMenus[restaurant.name] || []
      setMenuCategories(restaurantMenu)
      setActiveSection(restaurantMenu[0]?.id)
    }
  }, [restaurant])
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="flex-1 pb-20">
      <div className="relative">
        <img
          src={
            restaurant?.imageUrl ||
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }
          alt={restaurant?.name || 'Restaurant'}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="py-4">
          <h1 className="text-2xl font-bold">{restaurant?.name}</h1>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <div className="flex items-center mr-2">
              <StarIcon size={16} className="text-black mr-1" fill="black" />
              <span>{restaurant?.rating}</span>
            </div>
            <span>•</span>
            <span className="mx-2">{restaurant?.cuisine}</span>
            <span>•</span>
            <span className="mx-2">{restaurant?.priceCategory}</span>
          </div>
          <div className="flex items-center text-sm mt-1">
            <ClockIcon size={16} className="mr-1 text-gray-600" />
            <span className="text-gray-600">
              {restaurant?.deliveryTime} min • {restaurant?.deliveryFee}{' '}
              delivery fee
            </span>
          </div>
        </div>
        {menuCategories.length > 0 && (
          <>
            <div className="sticky top-[72px] bg-white z-10 border-b border-gray-200">
              <div className="overflow-x-auto">
                <div className="flex space-x-6 py-3 min-w-max">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                      className={`text-sm font-medium whitespace-nowrap ${activeSection === category.id ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              {menuCategories.map((category) => (
                <div
                  key={category.id}
                  id={`section-${category.id}`}
                  className="mb-8"
                >
                  <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                  {category.items.map((item) => (
                    <FoodItem
                      key={item.id}
                      item={item}
                      onAddToCart={onAddToCart}
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
