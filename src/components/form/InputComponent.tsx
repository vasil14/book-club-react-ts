interface InputComponentAttributes {
  inputId: string
  htmlFor: string
  label: string
  type: string
  placeholder: string
  autoComplete?: string
  isRequired?: boolean
  onChangeState: (e: any) => void
  inputRef: any
}

const InputComponent = ({
  htmlFor,
  label,
  type,
  placeholder,
  inputId,
  autoComplete,
  isRequired,
  onChangeState,
  inputRef,
}: InputComponentAttributes) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="pl-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={inputId}
        className="border pl-2 h-10"
        autoComplete={autoComplete}
        required={isRequired}
        onChange={(e) => onChangeState(e.target.value)}
        ref={inputRef}
      />
    </div>
  )
}

export default InputComponent
