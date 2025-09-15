import { useState } from "react";
import TagsBox from "./TagsBox"
interface InputTagsBoxProps {
  label: string;
  tags: Set<string>;
  required: boolean;
  feedback: string;
  onAddTag: (newTag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export default function InputTagsBox({ label, tags, required = false, feedback = '', onAddTag, onRemoveTag }: InputTagsBoxProps) {
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
    <div className="flex flex-col gap-3 w-full">
      <label className="flex flex-col gap-1">
        <span>{inputTagsBoxLabel}</span>
        <input 
          className="border bg-dark-scondary border-white px-4 py-2 rounded-sm" 
          type="text" 
          name="categories"
          value={inputValue}
          maxLength={15}
          minLength={2}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handlerKeyDown}
          aria-describedby="input-tag-box-feedback"
        />
        { feedback && <p id="input-tag-box-feedback" className="text-xs font-light">{feedback}</p> }
      </label>
      <div className="tags">
        <TagsBox tags={Array.from(tags)}/>
      </div>
    </div>
  )
}