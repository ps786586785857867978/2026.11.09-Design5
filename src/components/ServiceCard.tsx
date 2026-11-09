type ServiceCardProps = {
  title: string
  description: string
  price: string
  duration: string
  selected?: boolean
  onSelect: () => void
}

export function ServiceCard({
  title,
  description,
  price,
  duration,
  selected = false,
  onSelect,
}: ServiceCardProps) {
  return (
    <button
      type="button"
      className={`service-card${selected ? ' service-card--selected' : ''}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <span className="service-card__heading">
        <span className="service-card__title">{title}</span>
        <span className="service-card__price">{price}</span>
      </span>
      <span className="service-card__description">{description}</span>
      <span className="service-card__duration">{duration}</span>
    </button>
  )
}
