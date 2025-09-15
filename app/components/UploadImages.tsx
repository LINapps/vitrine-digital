'use client';
import { ArrowDownTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { ChangeEvent, useEffect, useState } from 'react'

export default function UploadImages() {
  const [preview, setPreviews] = useState<string>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviews(url)
    }
  }

  const removeUploadedImage = () => {
    setPreviews(undefined)
  }
  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview) }
  }, [preview])
  return (
    <div className="flex flex-col gap-3">
      { !preview && <label className="flex justify-center items-center h-24 border border-dashed border-white w-full rounded-lg bg-dark-scondary">
        <span role="button" className="flex">
          <ArrowDownTrayIcon className="size-6 text-white" />
        </span>
        <input className="hidden" type="file" hidden onChange={handleChange} />
      </label> }
      { preview && 
        <>
          <div className="flex justify-center">
            <img
              className="object-cover rounded-sm"
              src={preview}
              alt=""
              width={228}
              height={228}
            /> 
          </div>
          <div className="flex justify-center">
            <button 
              className="flex gap-1 items-center bg-dark-scondary text-sm text-white px-2 py-1.5 rounded-sm cursor-pointer"
              onClick={removeUploadedImage}
            >
              < ArrowUturnLeftIcon className="size-5"/>trocar imagem
            </button>
          </div>
        </>
      }
    </div>
  )
}