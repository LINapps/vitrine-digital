import { XMarkIcon } from '@heroicons/react/24/solid'

type Text = { text: string; onClose: (text: string) => void }
export default function Tag({ text, onClose }: Text) {
  const handlerOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClose(text)
  }
  return (
    <div className="flex text-white text-xs bg-dark-primary px-1.5 py-1 rounded-sm gap-1.5 h-fit">
      <span className="leading-4">{text}</span>
      <button onClick={handlerOnClose}>
        <XMarkIcon className="size-4" />
      </button>
    </div>
  )
}