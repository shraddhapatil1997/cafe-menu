import { MENU_ITEMS } from '../data/menu'
import MenuItemCard from '../components/MenuItemCard'
import { useCart } from '../context/CartContext'

export default function MenuPage() {
  const { addItem, items: cartItems, updateQuantity, removeItem } = useCart()

  return (
    <section>
      <header className="pageHeader">
        <h2>Menu</h2>
        <p>Select items to build your order.</p>
      </header>

      <div className="grid">
        {MENU_ITEMS.map((item) => {
          const cartItem = cartItems.find((c) => c.id === item.id)
          const quantity = cartItem?.quantity ?? 0

          return (
            <MenuItemCard
              key={item.id}
              item={item}
              quantity={quantity}
              onAdd={() => addItem(item)}
              onDecrease={() => {
                if (quantity <= 1) removeItem(item.id)
                else updateQuantity(item.id, quantity - 1)
              }}
            />
          )
        })}
      </div>
    </section>
  )
}
