'use client';

import InputTagsBox from "@/app/components/InputTagsBox"
import UploadImages from "@/app/components/UploadImages"
import { useState } from "react"

export default function CreateBanner() {
  const MAX_TAG_LENGTH = 12
  const MIN_TAG_LENGTH = 2
  const FEEDBACKS = {
    maxTagLengthMessage: 'no máximo, 12 caracteres',
  } as const

  const [inputTagsBoxFeedback, setInputTagsBoxFeedback] = useState<string>('')

  const [tags, setTags] = useState<Set<string>>(new Set())
  const handlerAddTag = (newTag: string) => {
    if (newTag.length > MAX_TAG_LENGTH) {
      setInputTagsBoxFeedback(FEEDBACKS.maxTagLengthMessage)
      return
    }
    setTags((prev) => new Set(prev).add('#' + newTag))
  }
  const handlerRemoveTag = (tag: string) => {
    const newTags = new Set(tags);
    newTags.delete('#' + tag)
    setTags(newTags)
  }

  return (
    <div className="flex flex-col gap-5 mx-80 py-6">
      <h1>Criar banner</h1>
      <form className="flex flex-col gap-8">
        <section className="flex flex-col">
          <div className="flex flex-col gap-1 items-center">
            <h2>Domínio ou rede social</h2>
            <p className="w-32 text-xs text-center font-light mb-4">O Link ou contato que você quer alavancar</p>
          </div>
          <div className="flex flex-col  gap-4">
            <label className="flex flex-col gap-1">
              <span>tipo*</span>
              <select className="border bg-dark-scondary border-white px-4 py-2 rounded-sm">
                <option>instagram</option>
                <option>facebook</option>
                <option>tiktok</option>
                <option>youtube</option>
                <option>site próprio</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span>link, url ou contato*</span>
              <input type="text" className="border bg-dark-scondary border-white px-4 py-2 rounded-sm"/>
            </label>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <span className="text-white text-center">Imagem de apresentação do banner</span>
          <UploadImages />
        </section>
        <section className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span>Título*</span>
            <input className="border bg-dark-scondary border-white px-4 py-2 rounded-sm" type="text" name="title"/>
          </label>
          <label className="flex flex-col gap-1">
            <span>Assunto (opcional)</span>
            <input className="border bg-dark-scondary border-white px-4 py-2 rounded-sm" type="text" name="city"/>
          </label>
          <label className="flex flex-col gap-1">
            <span>Descrição (opcional)</span>
            <textarea className="border bg-dark-scondary border-white px-4 py-2 rounded-sm" name="description" />
          </label>
        </section>
        <section className="flex flex-col justify-center">
          <div className="flex flex-col gap-1 items-center">
            <h2>Selecionar Categorias</h2>
            <p className="w-32 text-xs text-center font-light mb-4">você pode selecionar até 5 categorias</p>
          </div>
          <InputTagsBox label="categorias" tags={tags} required={false} feedback={inputTagsBoxFeedback} onAddTag={handlerAddTag} onRemoveTag={handlerRemoveTag}/>
        </section>
        <div className="flex">
          <button className="bg-purple-800 text-white px-2 py-3 rounded w-full">Criar banner</button>
        </div>
      </form>
    </div>
  )
}