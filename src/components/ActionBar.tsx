import { Button } from './Button'

type ActionBarProps = {
  label: string
  onAction?: () => void
}

export function ActionBar({ label, onAction }: ActionBarProps) {
  return (
    <footer className="action-bar">
      <Button onClick={onAction}>{label}</Button>
    </footer>
  )
}
