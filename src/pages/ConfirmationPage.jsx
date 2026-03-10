import { Link, useLocation } from 'react-router-dom'

export default function ConfirmationPage() {
  const { state } = useLocation()
  const { orderNumber, customerName, tableNumber, total, itemCount } = state || {}

  if (!state) {
    return (
      <section>
        <header className="pageHeader">
          <h2>Order Confirmation</h2>
          <p>Looks like you haven’t placed an order yet.</p>
        </header>
        <div className="emptyState">
          <Link className="button" to="/">
            Browse the Menu
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      <header className="pageHeader">
        <h2>Thank you, {customerName}!</h2>
        <p>Your order is confirmed.</p>
      </header>

      <div className="confirmation">
        <p>
          <strong>Order #</strong> {orderNumber}
        </p>
        <p>
          <strong>Items:</strong> {itemCount}
        </p>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
        {tableNumber && (
          <p>
            <strong>Table:</strong> {tableNumber}
          </p>
        )}
        <p>We’ll start preparing it right away!</p>
      </div>

      <Link className="button" to="/" style={{ marginTop: '1rem' }}>
        Back to menu
      </Link>
    </section>
  )
}
