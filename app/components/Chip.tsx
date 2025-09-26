interface Props {
  text: string;
  icon: string;
}

export default function Chip({ icon, text}: Props) {
  return (
    <div className="flex justify-center items-center h-8 w-fit px-3 rounded-full gap-2 bg-[#25252556]">
      <img src={icon} alt={text} height="20" width="20"/>
      <span className="text-white text-sm">{text}</span>
    </div>
  )
}