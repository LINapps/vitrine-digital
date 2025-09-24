import React, { useContext, useState } from 'react'

type CreateBannerContextType = {
  tags: Set<string>
  removeTag: (tag: string) => void;
}

export const CreateBannerContext = React.createContext<CreateBannerContextType | null>(null)

export const CreateBannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tags, setTags] = useState<Set<string>>(new Set())

  const removeTag = (tag: string) => {
    const newTags = new Set(tags);
    newTags.delete(tag)
    setTags(newTags)
  }

  return (
    <CreateBannerContext.Provider value={{ tags, removeTag }}>
      {children}
    </CreateBannerContext.Provider>
  )
}

export const useCreateBanner = () => {
  const ctx = useContext(CreateBannerContext);
  if (!ctx) throw new Error("useTags must be used within a TagsProvider");
  return ctx;
};