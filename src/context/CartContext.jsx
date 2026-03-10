import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const STORAGE_KEY = 'shraddhaCafeCart'

const CartContext = createContext(null)

function getInitialState() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return { items: [] }
    return JSON.parse(stored)
  } catch {
    return { items: [] }
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.item.id)
      const nextItems = existing
        ? state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + (action.quantity ?? 1) }
              : item,
          )
        : [...state.items, { ...action.item, quantity: action.quantity ?? 1 }]

      return { ...state, items: nextItems }
    }

    case 'UPDATE_QTY': {
      const nextItems = state.items
        .map((item) =>
          item.id === action.id ? { ...item, quantity: Math.max(0, action.quantity) } : item,
        )
        .filter((item) => item.quantity > 0)

      return { ...state, items: nextItems }
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((item) => item.id !== action.id) }

    case 'CLEAR':
      return { ...state, items: [] }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return { itemCount, subTotal }
  }, [state.items])

  const value = useMemo(
    () => ({
      items: state.items,
      itemCount: totals.itemCount,
      subTotal: totals.subTotal,
      addItem: (item, quantity) => dispatch({ type: 'ADD_ITEM', item, quantity }),
      updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QTY', id, quantity }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    }),
    [state.items, totals.itemCount, totals.subTotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within <CartProvider>')
  return ctx
}
