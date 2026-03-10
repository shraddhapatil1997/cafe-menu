import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

export default function CartPage() {
  const { items, itemCount, subTotal, updateQuantity, removeItem } = useCart()

  return (
    <section>
      <header className="pageHeader">
        <h2>Your Cart</h2>
        <p>Review and adjust quantities before checkout.</p>
      </header>

      {items.length === 0 ? (
        <div className="emptyState">
          <p>Your cart is empty. Start by adding something from the menu.</p>
          <Link className="button" to="/">
            View Menu
          </Link>
        </div>
      ) : (
        <>
          <ul className="cartList">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQty={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </ul>

          <footer className="cartSummary">
            <div>
              <p>
                <strong>Items:</strong> {itemCount}
              </p>
              <p>
                <strong>Subtotal:</strong> ${subTotal.toFixed(2)}
              </p>
            </div>
            <Link className="button" to="/checkout">
              Checkout
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}
