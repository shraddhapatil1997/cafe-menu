import { MENU_ITEMS } from '../data/menu'
import MenuItemCard from '../components/MenuItemCard'
import { useCart } from '../context/CartContext'

export default function MenuPage() {
  const { addItem } = useCart()

  return (
    <section>
      <header className="pageHeader">
        <h2>Menu</h2>
        <p>Select items to build your order.</p>
      </header>

      <div className="grid">
        {MENU_ITEMS.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={() => addItem(item)} />
        ))}
      </div>
    </section>
  )
}
