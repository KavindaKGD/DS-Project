import React from 'react'
import { XIcon, ShoppingBagIcon } from 'lucide-react'
export const Cart = ({ isOpen, items, onClose, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0)
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <XIcon size={20} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <ShoppingBagIcon size={64} className="text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b border-gray-100"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="fixed bottom-0 left-0 w-full max-w-md bg-white border-t border-gray-200 p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
