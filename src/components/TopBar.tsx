import './components.css'

type TopBarProps = {
  step: 1 | 2 | 3 | 4
  onBack?: () => void
}

export function TopBar({ step, onBack }: TopBarProps) {
  return (
    <header className="top-bar">
      {onBack ? (
        <button className="top-bar__back" type="button" aria-label="Go back" onClick={onBack}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      ) : <span aria-hidden="true" />}
      <span className="top-bar__title">Book a repair</span>
      <span className="top-bar__step">{step === 4 ? 'Booked' : `Step ${step} of 3`}</span>
    </header>
  )
}
