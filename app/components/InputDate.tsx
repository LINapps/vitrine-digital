interface Props {
  id?: string;
  name?: string;
  label?: string;
  feedback?: string;
  defaultValue: string;
}

interface Events {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputDate = Props & Events;

export default function InputDate({ id, name, label, feedback, defaultValue, onChange }: InputDate) {
  const filterNonDigits = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, '')

    value = value.slice(0, 8)

    if (value.length >= 5) {
      value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3')
    } else if (value.length >= 3 ) {
      value = value.replace(/(\d{2})(\d{2})/, '$1/$2')
    }
    
    e.currentTarget.value = value
  }


  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <input 
        className="text-sm border bg-dark-scondary border-white px-4 py-2.5 rounded-sm" 
        type="text"
        pattern="\d{2}\/\d{2}\/\d{4}"
        placeholder="DD/MM/YYYY"
        inputMode="numeric"
        maxLength={10}
        id={id} 
        name={name} 
        defaultValue={defaultValue} 
        onChange={onChange}
        onInput={filterNonDigits}
      />
      <div className="flex flex-col">
        { feedback && (<p className="text-xs font-light">{feedback}</p>) }
      </div>
    </label>
  )
}