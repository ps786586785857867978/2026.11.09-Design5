type TimeSlotProps = {
  label: string
  selected?: boolean
  disabled?: boolean
  onSelect: () => void
}

export function TimeSlot({ label, selected = false, disabled = false, onSelect }: TimeSlotProps) {
  return (
    <button
      className={`time-slot${selected ? ' time-slot--selected' : ''}`}
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onSelect}
    >
      {label}
    </button>
  )
}
