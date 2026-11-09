import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  accent?: boolean
  error?: string
}

export function Input({ label, accent = false, error, className = '', id, ...props }: InputProps) {
  const errorId = id && error ? `${id}-error` : undefined

  return (
    <label className={`input-field${error ? ' input-field--error' : ''}`}>
      <span className="input-field__label">{label}</span>
      <input
        id={id}
        className={`input-field__control${accent || error ? ' input-field__control--accent' : ''} ${className}`.trim()}
        aria-describedby={errorId}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error && <span className="input-field__error" id={errorId} role="alert">{error}</span>}
    </label>
  )
}
