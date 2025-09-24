'use client';

import InputTagsBox from "@/app/components/InputTagsBox"
import InputText from "@/app/components/InputText";
import SelectOptions from "@/app/components/SelectOptions";
import TextArea from "@/app/components/TextArea";
import UploadImages from "@/app/components/UploadImages"
import { Option } from "@/app/types/global";
import { useState } from "react"
import { validator } from "@/app/utils/validations";

export default function CreateBanner() {
  const MAX_TAG_LENGTH = 12
  const MIN_TAG_LENGTH = 2

  const [options, setOptions] = useState<Option[]>([
    {id: '', text: 'selecione uma opção', disabled: true },
    {id: '0', text: 'instagram', disabled: false },
    {id: '1', text: 'facebook', disabled: false },
    {id: '2', text: 'pinterest', disabled: false }
  ])
  const [typeSocialMedia, setTypeSocialMedia] = useState<string>('1')
  const [typeSocialMediaFeedback, setTypeSocialMediaFeedback] = useState<string | undefined>('')
  const handleOnChangeTypeSocialMedia = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    console.log(value)
    setTypeSocialMedia(value)
    // setTypeSocialMediaFeedback(validator.required(typeSocialMedia))
  }

  const [tags, setTags] = useState<Set<string>>(new Set())
  const [tagsBoxFeedback, setTagsBoxFeedback] = useState<string>('')
  const handleAddTag = (newTag: string) => {
    setTags((prev) => new Set(prev).add('#' + newTag))
  }
  const handleRemoveTag = (tag: string) => {
    const newTags = new Set(tags);
    newTags.delete(tag)
    setTags(newTags)
  }

  const [imageFile, setImageFile] = useState<File | Blob>()

  const [contactLink, setContactLink] = useState<string>('')
  const [contactLinkFeedback, setContactLinkFeedback] = useState<string | undefined>()
  const handleOnChangeContactLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setContactLink(value)
    setContactLinkFeedback(validator.required(contactLink))
  }

  const MAX_TITLE_LENGTH = 25
  const MIN_TITLE_LENGTH = 2
  const [title, setTitle] = useState<string>('')
  const [titleFeedback, setTitleFeedback] = useState<string | undefined>()
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTitle(value)
    const validations: Array<string | undefined> = [validator.maxLength(value, MAX_TAG_LENGTH), validator.minLength(value, MIN_TAG_LENGTH)]
    setTitleFeedback(validations.find((validationMessage?: string) => validationMessage) as string | undefined)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    console.log(data.get('domain'))
  }
  return (
    <div className="flex flex-col gap-5 mx-80 py-6">
      <h1>Criar banner</h1>
      <form className="flex flex-col gap-8" onSubmit={submit}>
        <section className="flex flex-col">
          <div className="flex flex-col gap-1 items-center">
            <h2>Site próprio, rede social ou canal</h2>
            <p className="w-32 text-xs text-center font-light mb-4">O Link ou contato que você quer alavancar</p>
          </div>
          <div className="flex flex-col gap-7">
            <SelectOptions
              id="domain"
              name="domain"
              label="Tipo (obrigatório)"
              options={options}
              value={typeSocialMedia}
              feedback={typeSocialMediaFeedback}
              required={true}
              onChange={handleOnChangeTypeSocialMedia}
            />
            <InputText 
              id="url-to" 
              label="Link, url ou contato (obrigatório)" 
              value={contactLink}
              feedback={contactLinkFeedback}
              required={true}
              onChange={handleOnChangeContactLink} 
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-white text-center">Imagem de apresentação do banner</h2>
          </div>
          <UploadImages onSelectImageFile={setImageFile}/>
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-center">
            <h2>Detalhes</h2>
            <p className="w-32 text-xs text-center font-light">
              Fale sobre a sua rede social, site ou canal. Escreva um título e uma descrição
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <InputText 
              id="title"
              name="title"
              label="Título (obrigatório)"  
              value={title}
              required={true}
              min={MIN_TITLE_LENGTH}
              max={MAX_TITLE_LENGTH}
              feedback={titleFeedback}
              onChange={handleOnChangeTitle}
            />
            <TextArea label="Descrição (opcional)" rows={3} />
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <div className="flex flex-col gap-1 items-center">
            <h2>Selecionar Categorias</h2>
            <p className="w-32 text-xs text-center font-light mb-4">você pode selecionar até 5 categorias</p>
          </div>
          <InputTagsBox
            id="categories-input"
            name="categories"
            label="categorias" 
            tags={tags} 
            required={false} 
            feedback={tagsBoxFeedback} 
            onAddTag={handleAddTag} 
            onRemoveTag={handleRemoveTag}
          />
        </section>
        <div className="flex">
          <button type="submit" className="bg-purple-800 text-white px-2 py-3 rounded w-full">Criar banner</button>
        </div>
      </form>
    </div>
  )
}