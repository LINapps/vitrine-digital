import Chip from "./Chip";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

interface Props {
  categories: string[]
}

type Banner = Props
export default function Banner({ categories }: Props) {
  return (
    <div className="flex flex-col relative">
      <picture>
        <img src="/images/download.jpeg" width="280" height="280" className="w-lvw  h-full" alt=""/>
      </picture>
      <div className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black/80 to-black/20 h-full w-full px-3 py-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-2xl">Ane aninha</h2>
          <div className="flex flex-wrap gap-x-2" aria-label="categorias do banner">
            {categories.map(category => (<span key={category} className="text-white text-xs md:text-base">{category}</span>))}
          </div>
        </div>
      </div>
      <ArrowTopRightOnSquareIcon className="size-6 md:size-9 absolute text-white bottom-15 right-4"/>
      <div className="top-2 absolute right-2">
        <Chip icon="instagram.svg" text="instagram" />
      </div>
    </div>
  )
}