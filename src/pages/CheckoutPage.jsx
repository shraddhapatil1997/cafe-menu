import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CheckoutPage() {
  const { items, subTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [customerName, setCustomerName] = useState('')
  const [tableNumber, setTableNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!customerName.trim()) return

    const orderNumber = Math.floor(100000 + Math.random() * 900000)

    clearCart()
    navigate('/confirmation', {
      state: {
        orderNumber,
        customerName: customerName.trim(),
        tableNumber: tableNumber.trim(),
        total: subTotal,
        itemCount: items.length,
      },
    })
  }

  if (items.length === 0) {
    return (
      <section>
        <header className="pageHeader">
          <h2>Checkout</h2>
          <p>Add something to the cart before checking out.</p>
        </header>
        <div className="emptyState">
          <p>Your cart is empty.</p>
          <p>Head to the menu and pick a few items.</p>
        </div>
      </section>
    )
  }

  return (
    <section>
      <header className="pageHeader">
        <h2>Checkout</h2>
        <p>Just a few details and your order will be ready.</p>
      </header>

      <form className="checkoutForm" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Table number (optional)
          <input
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="e.g., 12"
          />
        </label>

        <div className="checkoutSummary">
          <div>
            <p>
              <strong>Items:</strong> {items.length}
            </p>
            <p>
              <strong>Total:</strong> ${subTotal.toFixed(2)}
            </p>
          </div>
          <button className="button button--primary" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </section>
  )
}
