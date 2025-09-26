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

type InputEmail = Props & Events

export default function InputEmail({ id, name, label, feedback, defaultValue = '', onChange }: InputEmail) {
  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <input 
        className="text-sm border bg-dark-scondary border-white px-4 py-2.5 rounded-sm" 
        type="email" 
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