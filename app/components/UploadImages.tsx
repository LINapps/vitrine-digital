'use client';
import { ArrowDownTrayIcon, ArrowUturnLeftIcon, ArrowsPointingOutIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { resizeImage } from '../utils/resizeImage';

interface UploadImagesProps {
  onSelectImageFile: (file: File | Blob) => void
}
type Rotation = 'rotate-none' | 'rotate-90' | 'rotate-180' | 'rotate-270'
export default function UploadImages({ onSelectImageFile }: UploadImagesProps) {
  const ROTATIONS: Rotation[] = ['rotate-none', 'rotate-90', 'rotate-180', 'rotate-270'] as const

  const [preview, setPreviews] = useState<string>()
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [isCover, setIsCover] = useState<boolean>()
  const [rotateIndex, setRotateIndex] = useState<number>(0)
  const [rotateClass, setRotateClass] = useState<Rotation>('rotate-none')

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const { blob } = await resizeImage({ file, maxWidth: 320, maxHeight: 320, type: file.type })
    const url = URL.createObjectURL(blob)
    setPreviews(url)
    onSelectImageFile(blob)
  }

  const changeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    inputFileRef.current?.click()
  }

  const rotateImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setRotateIndex(prev => {
      let next = prev + 1
      if (next > 3) next = 0

      setRotateClass(ROTATIONS[next])

      return next
    })
  }

  useEffect(() => {

  }, [rotateIndex])

  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview) }
  }, [preview])

  return (
    <div className="flex flex-col items-center gap-3">
      { !preview && 
      <label
        className="flex justify-center items-center h-24 border border-dashed border-white w-full rounded-lg bg-dark-scondary"
        htmlFor="file-upload"
      >
        <span role="button" className="flex">
          <ArrowDownTrayIcon className="size-6 text-white" />
        </span>
      </label> }
      <input ref={inputFileRef} className="hidden" id="file-upload" hidden type="file" onChange={handleChange} />
      { preview && 
        <>
          <div className="flex justify-center h-80 w-80 rounded-md bg-dark-scondary relative">
            <img
              className={`${isCover ? 'object-cover' : 'object-contain' } ${rotateClass} object-contain rounded-sm max-h-80 max-w-80 w-full`}
              src={preview}
              alt="imagem de apresentação do banner"

            />
            <button 
              type="button" 
              className="absolute text-white bottom-2 left-2 p-1 bg-dark-primary rounded-full"
              onClick={() => setIsCover(prev => !prev)}
            >
              <ArrowsPointingOutIcon className="size-5"/>
            </button>
            <button 
              type="button" 
              className="absolute text-white bottom-2 right-2 p-1 bg-dark-primary rounded-full"
              onClick={rotateImage}
            >
              <ArrowPathIcon className="size-5"/>
            </button>
          </div>
          <div className="flex justify-center">
            <button 
              className="flex gap-1 items-center bg-dark-scondary text-sm text-white px-2 py-1.5 rounded-sm cursor-pointer"
              onClick={changeImage}
              type="button"
            >
              < ArrowUturnLeftIcon className="size-4"/>trocar imagem
            </button>
          </div>
        </>
      }
    </div>
  )
}