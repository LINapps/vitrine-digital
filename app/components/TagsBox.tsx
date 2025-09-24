import Tag from '@/app/components/Tag'

type TagList = {
  tags: string[];
  onRemoveTag: (tag: string) => void
}
export default function TagsBox({ tags, onRemoveTag }: TagList) {
  return (
    <div className="bg-dark-scondary flex flex-wrap gap-4 px-3 py-2 rounded-md min-h-10">
      {tags.map(tag =>  <Tag key={tag} text={tag} onClose={onRemoveTag}/>)}
    </div>
  )
}