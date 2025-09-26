interface Props {
  id?: string;
  name?: string;
  label?: string;
  feedback?: string;
  defaultValue: string;
}

interface Events {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type InputPassword = Props & Events

export default function InputPassword({ id, name, label, feedback, defaultValue = '', onChange }: InputPassword) {
  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <input 
        className="text-sm border bg-dark-scondary border-white px-4 py-2.5 rounded-sm" 
        type="password" 
        id={id} 
        name={name} 
        defaultValue={defaultValue} 
        onChange={onChange}
      />
      <div className="flex flex-col">
        { feedback && (<p className="text-xs font-light">{feedback}</p>) }
      </div>
    </label>
  )
}