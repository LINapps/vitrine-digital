import { useState } from "react";
import TagsBox from "./TagsBox"
import { Nullable } from "../types/global";
interface Props {
  id?: string;
  label: string;
  name?: string;
  tags: Set<string>;
  required: boolean;
  feedback: Nullable<string>;
}

interface Events {
  onAddTag: (newTag: string) => void;
  onRemoveTag: (tag: string) => void;
}

type InputTagsBox = Props & Events
export default function InputTagsBox({ id, label, name, tags, required = false, feedback = '', onAddTag, onRemoveTag }: InputTagsBox) {
  const [inputValue, setInputValue] = useState<string>('')
  const inputTagsBoxLabel = `${label} ${required ? '*': '(opcional)'}`

  function handlerKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      onAddTag(inputValue.trim())
      setInputValue('')
    }
  }
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="flex flex-col gap-1">
        <span>{inputTagsBoxLabel}</span>
        <input
          id={id}
          name={name}
          className="border bg-dark-scondary border-white px-4 py-2 rounded-sm" 
          type="text"
          value={inputValue}
          data-selected={tags}
          maxLength={15}
          minLength={2}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handlerKeyDown}
          aria-describedby="input-tag-box-feedback"
        />
        { feedback && <p id="input-tag-box-feedback" className="text-xs font-light">{feedback}</p> }
      </label>
      <TagsBox tags={Array.from(tags)} onRemoveTag={onRemoveTag}/>
    </div>
  )
}