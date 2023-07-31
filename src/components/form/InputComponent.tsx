interface InputComponentAttributes {
  id: string
  htmlFor: string
  label: string
  type: string
  placeholder: string
  autoComplete?: string
  required?: boolean
  state: (e: any) => void
}

const InputComponent: React.FC<InputComponentAttributes> = ({
  htmlFor,
  label,
  type,
  placeholder,
  id,
  autoComplete,
  required,
  state
}) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="pl-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="border pl-2 h-10"
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => state(e.target.value)}
      />
    </div>
  )
}

export default InputComponent
