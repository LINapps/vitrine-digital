import { Option } from "../types/global";

interface Props {
  id: string;
  name: string;
  value: string;
  options: Option[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  size?: number;
  autoFocus?: boolean;
  form?: string;
  autoComplete?: 'on' | 'off';
  feedback?: string;
  tabIndex?: number;
}

interface Events {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

type SelectOptions = Props & Events
export default function SelectOptions({
  id,
  name,
  value = '',
  options = [],
  label = '',
  required = false,
  disabled = false,
  multiple = false,
  size = 1,
  autoFocus = false,
  autoComplete = 'off',
  tabIndex,
  feedback = '',
  onChange
}: SelectOptions) {
  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <select 
        id={id}
        name={name}
        className="border bg-dark-scondary border-white px-4 py-2 rounded-sm"
        value={value}
        required={required}
        disabled={disabled}
        multiple={multiple}
        size={size}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        tabIndex={tabIndex}
        onChange={onChange}
      >
        {options.map(option => (
          <option
            key={option.id}
            value={option.id} 
            disabled={option.disabled}
          >
            {option.text}
          </option>
        ))}
      </select>
      {feedback && <p>{feedback}</p>}
    </label>
  )
}