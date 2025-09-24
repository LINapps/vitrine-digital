type EnterKeyHint = "search" | "enter" | "done" | "go" | "next" | "previous" | "send";

interface Props {
  id: string;
  name?: string;
  label?: string;
  defaultValue: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  feedback?: string;
  spellCheck: boolean;
  wrap: 'soft' | 'hard';
  placeholder: string;
  cols: number;
  rows: number;
  autoCorret?: 'on' | 'off';
  enterKeyHint?: EnterKeyHint;
  resizable?: boolean;
}

interface Events {
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type TextArea = Props & Events;

export default function TextArea({
  id = '',
  name = '',
  label = '',
  defaultValue = '',
  required = false,
  readOnly = false,
  disabled = false,
  min = 0,
  max = Infinity,
  feedback = '',
  spellCheck = false,
  wrap = 'soft',
  placeholder = '',
  cols = 20,
  rows = 2,
  autoCorrect = 'off',
  enterKeyHint = 'enter',
  resizable = true
}) {
  return (
    <label className="flex flex-col gap-1">
      { label && <span>{label}</span> }
      <textarea
        className={`text-sm border bg-dark-scondary border-white px-4 py-2.5 rounded-sm ${resizable ? 'resize-none' : 'resize'}`}
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        minLength={min}
        maxLength={max}
        spellCheck={spellCheck}
        placeholder={placeholder}
        wrap={wrap}
        rows={rows}
        cols={cols}
        autoCorrect={autoCorrect}
        enterKeyHint={enterKeyHint as EnterKeyHint}
      />
      { feedback && <p className="text-xs font-light">{feedback}</p>}
    </label>
  )
}