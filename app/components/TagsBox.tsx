import Tag from '@/app/components/Tag'

type TagList = {
  tags: string[]
}
export default function TagsBox({ tags }: TagList) {
  return (
    <div className="bg-dark-scondary flex flex-wrap gap-4">
      {tags.map(tag =>  <Tag key={tag} text={tag} />)}
    </div>
  )
}