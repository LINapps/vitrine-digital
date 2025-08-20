export default function CreateBanner() {
  return (
    <form className="flex flex-col bg-yellow">
      <h1>Criar banner</h1>
      <section className="flex flex-col">
        <label className="flex flex-col">
          <span>Título*</span>
          <input className="border border-gray-500" type="text" name="title"/>
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

          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h2>Adicionar links</h2>

      </section>
    </form>
  )
}