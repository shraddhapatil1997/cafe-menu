import './MenuItemCard.css'

export default function MenuItemCard({ item, onAdd }) {
  return (
    <article className="menuItem">
      <img className="menuItem__image" src={item.image} alt={item.name} />

      <div className="menuItem__info">
        <div>
          <h3 className="menuItem__name">{item.name}</h3>
          <p className="menuItem__desc">{item.description}</p>
        </div>
        <p className="menuItem__price">${item.price.toFixed(2)}</p>
      </div>

      <button className="menuItem__add" onClick={() => onAdd(item)}>
        Add
      </button>
    </article>
  )
}
