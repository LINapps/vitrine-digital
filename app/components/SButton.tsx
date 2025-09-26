interface Props {
  content: string;
}

interface Events {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type SButton = Props & Events;
export default function SButton({ content, onClick }: SButton) {
  return (
    <button className="bg-purple-800 text-white text-base font-bold capitalize px-2 py-3 rounded w-full" onClick={onClick}>{content}</button>
  )
}