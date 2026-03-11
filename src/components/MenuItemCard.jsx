import './MenuItemCard.css'

export default function MenuItemCard({ item, quantity, onAdd, onDecrease }) {
  const showControls = quantity > 0

  return (
    <article className="menuItem">
      <div className="menuItem__imageWrapper">
        <img className="menuItem__image" src={item.image} alt={item.name} />
        {quantity > 0 && <span className="menuItem__badge">{quantity}</span>}
      </div>

      <div className="menuItem__info">
        <div>
          <h3 className="menuItem__name">{item.name}</h3>
          <p className="menuItem__desc">{item.description}</p>
        </div>
        <p className="menuItem__price">${item.price.toFixed(2)}</p>
      </div>

      <div className="menuItem__actions">
        {showControls ? (
          <div className="menuItem__qtyControls">
            <button className="menuItem__qty" onClick={onDecrease}>
              –
            </button>
            <span className="menuItem__qtyValue">{quantity}</span>
            <button className="menuItem__qty" onClick={() => onAdd(item)}>
              +
            </button>
          </div>
        ) : (
          <button className="menuItem__add" onClick={() => onAdd(item)}>
            Add
          </button>
        )}
      </div>
    </article>
  )
}
