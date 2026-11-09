import { useState } from 'react'
import { ActionBar } from './components/ActionBar'
import { Input } from './components/Input'
import { ServiceCard } from './components/ServiceCard'
import { Summary } from './components/Summary'
import { TimeSlot } from './components/TimeSlot'
import { TopBar } from './components/TopBar'
import './styles/app.css'

const services = [
  { title: 'Flat tyre repair', description: 'Tube or tyre swap, any wheel size.', price: '€15', duration: '30 min' },
  { title: 'Brake check and adjust', description: 'Pads, cables and alignment.', price: '€25', duration: '45 min' },
  { title: 'Gear tune-up', description: 'Smooth shifting on every gear.', price: '€30', duration: '45 min' },
  { title: 'Full service', description: 'Everything checked, cleaned and adjusted.', price: '€89', duration: '2 hours' },
]

const days = ['Today', 'Tomorrow', 'Mon 16']
const times = [
  { label: '09:00', disabled: true },
  { label: '10:30', disabled: true },
  { label: '12:00' },
  { label: '14:00' },
  { label: '16:30' },
  { label: '17:30' },
]

function durationForSentence(duration: string) {
  return duration === '30 min' ? '30 minutes' : duration === '45 min' ? '45 minutes' : duration
}

export default function App() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [selectedService, setSelectedService] = useState(0)
  const [selectedDay, setSelectedDay] = useState('Today')
  const [selectedTime, setSelectedTime] = useState('16:30')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const service = services[selectedService]
  const nameError = submitted && !name.trim() ? 'Enter your first and last name.' : undefined
  const phoneError = submitted && !phone.trim() ? 'Enter your phone number.' : undefined

  const goBack = () => setStep((current) => Math.max(1, current - 1) as 1 | 2 | 3)
  const goForward = () => setStep((current) => Math.min(3, current + 1) as 1 | 2 | 3)
  const confirmBooking = () => {
    setSubmitted(true)

    if (name.trim() && phone.trim()) {
      setStep(4)
    }
  }
  const bookAnotherRepair = () => {
    setName('')
    setPhone('')
    setSubmitted(false)
    setStep(1)
  }

  return (
    <main className="app">
      <TopBar step={step} onBack={step > 1 && step < 4 ? goBack : undefined} />

      {step === 1 && (
        <section className="screen-content" aria-labelledby="screen-title">
          <h1 className="screen-title" id="screen-title">Choose a service</h1>
          <p className="screen-subtitle">What does your bike need?</p>
          <div className="service-list">
            {services.map((item, index) => (
              <ServiceCard
                key={item.title}
                {...item}
                selected={selectedService === index}
                onSelect={() => setSelectedService(index)}
              />
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="screen-content" aria-labelledby="screen-title">
          <h1 className="screen-title" id="screen-title">Pick a drop-off time</h1>
          <p className="screen-description">{service.title}, about {durationForSentence(service.duration)}</p>

          <fieldset className="booking-group">
            <legend>Day</legend>
            <div className="day-list">
              {days.map((day) => (
                <TimeSlot key={day} label={day} selected={selectedDay === day} onSelect={() => setSelectedDay(day)} />
              ))}
            </div>
          </fieldset>

          <fieldset className="booking-group">
            <legend>Drop-off time</legend>
            <div className="time-list">
              {times.map((time) => (
                <TimeSlot
                  key={time.label}
                  label={time.label}
                  disabled={time.disabled}
                  selected={selectedTime === time.label}
                  onSelect={() => setSelectedTime(time.label)}
                />
              ))}
            </div>
          </fieldset>

          <p className="screen-helper">Ready the same day. We text you when your bike is done.</p>
        </section>
      )}

      {step === 3 && (
        <section className="screen-content" aria-labelledby="screen-title">
          <h1 className="screen-title screen-title--spaced" id="screen-title">Check and confirm</h1>
          <Summary service={service.title} dropOff={`${selectedDay} at ${selectedTime}`} price={service.price} />
          <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
            <Input
              id="customer-name"
              label="Your name"
              error={nameError}
              required
              placeholder="First and last name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              id="customer-phone"
              accent
              label="Phone number"
              error={phoneError}
              required
              inputMode="tel"
              placeholder="+32 470 12 34 56"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </form>
          <p className="screen-helper screen-helper--form">We text you when your bike is ready. You pay when you pick it up.</p>
        </section>
      )}

      {step === 4 && (
        <section className="screen-content booking-confirmation" aria-labelledby="screen-title" role="status">
          <span className="booking-confirmation__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="m5 12 4 4 10-10" />
            </svg>
          </span>
          <h1 className="screen-title" id="screen-title">You’re booked</h1>
          <p className="booking-confirmation__message">We’ll text you when your bike is ready.</p>
          <Summary service={service.title} dropOff={`${selectedDay} at ${selectedTime}`} price={service.price} />
          <p className="screen-helper">Bring your bike to the shop at your selected drop-off time. You pay when you pick it up.</p>
        </section>
      )}

      <ActionBar
        label={step === 4 ? 'Book another repair' : step === 3 ? 'Confirm booking' : 'Continue'}
        onAction={step === 4 ? bookAnotherRepair : step === 3 ? confirmBooking : goForward}
      />
    </main>
  )
}
