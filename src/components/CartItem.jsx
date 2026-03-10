import './CartItem.css'

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <li className="cartItem">
      <div className="cartItem__main">
        <img className="cartItem__image" src={item.image} alt={item.name} />
        <div className="cartItem__details">
          <h3 className="cartItem__name">{item.name}</h3>
          <p className="cartItem__meta">
            ${item.price.toFixed(2)} × {item.quantity} = ${
              (item.price * item.quantity).toFixed(2)
            }
          </p>
        </div>
        <button className="cartItem__remove" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>

      <div className="cartItem__controls">
        <label>
          Qty
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => onUpdateQty(item.id, Number(e.target.value))}
          />
        </label>
      </div>
    </li>
  )
}
