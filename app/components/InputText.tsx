interface Props {
  id: string;
  name?: string;
  label: string;
  value: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  feedback?: string | null;
  checkValue?: 'on' | 'off' | '';
  min?: number;
  max?: number;
  placeholder?: string;
}

interface Events {
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputText = Props & Events
export default function InputText({
  id,
  label = '',
  value = '',
  name,
  required = false,
  readonly = false,
  disabled = false,
  min = 0,
  max = Infinity,
  placeholder = '',
  feedback = '',
  onInput,
  onKeyDown,
  onChange
}: InputText) {

  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <input
        id={id}
        className="text-sm border bg-dark-scondary border-white px-4 py-2.5 rounded-sm"
        type="text" 
        name={name}
        value={value}
        required={required}
        readOnly={readonly}
        disabled={disabled}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        onInput={onInput}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <div className="flex flex-col">
        { feedback && (<p className="text-xs font-light">{feedback}</p>) }
      </div>
    </label>
  )
}