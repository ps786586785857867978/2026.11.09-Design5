type SummaryProps = {
  service: string
  dropOff: string
  price: string
}

export function Summary({ service, dropOff, price }: SummaryProps) {
  return (
    <dl className="summary">
      <div className="summary__row">
        <dt>Service</dt>
        <dd>{service}</dd>
      </div>
      <div className="summary__row">
        <dt>Drop-off</dt>
        <dd>{dropOff}</dd>
      </div>
      <div className="summary__row">
        <dt>Price</dt>
        <dd>{price}, pay at pick-up</dd>
      </div>
    </dl>
  )
}
