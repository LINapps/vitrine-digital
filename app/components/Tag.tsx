type Text = { text: string }
export default function Tag({ text }: Text) {
  return (
    <span className="text-white text-xs">{text}</span>
  )
}