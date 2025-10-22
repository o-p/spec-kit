export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
}

export function Input({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          input
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `.trim()}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p className="text-xs text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  )
}
