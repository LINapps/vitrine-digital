import TagsBox from "@/app/components/TagsBox"

export default function CreateBanner() {
  const tags = new Set(['#dacinha', '#memes', '#beatifulgirls'])

  return (
    <form className="flex flex-col">
      <h1>Criar banner</h1>
      <section className="flex flex-col">
        <label className="flex flex-col">
          <span>Título*</span>
          <input className="border bg-dark-scondary border-white" type="text" name="title"/>
        </label>
        <label className="flex flex-col">
          <span>Cidade*</span>
          <input className="border" type="text" name="city"/>
        </label>
        <label className="flex flex-col">
          <span>Descrição (opcional)</span>
          <textarea className="border" name="description" />
        </label>
      </section>
      <section className="flex flex-col">
        <h2>Selecionar Categorias</h2>
        <p>você pode selecionar até 5 categorias</p>
        <div className="flex flex-col">
          <label className="flex flex-col">
            <span>categorias (opcional)</span>
            <input className="border" type="text" name="categories"/>
          </label>
          <div className="tags">
            <TagsBox tags={Array.from(tags)}/>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h2>Adicionar redes sociais ou contatos</h2>
        <input type="text"/>
      </section>
    </form>
  )
}