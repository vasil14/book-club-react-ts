interface InputComponentAttributes {
  name: string;
}

const InputComponent: React.FC<InputComponentAttributes> = ({ name }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="pl-2" htmlFor={name}>
        {name}
      </label>
      <input
        type={name}
        placeholder={name}
        name={name}
        className="border pl-2 h-10"
      />
    </div>
  );
};

export default InputComponent;
