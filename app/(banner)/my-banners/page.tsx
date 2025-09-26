import Banner from "@/app/components/Banner";

export default function MyBanners() {
  return (
    <div className="px-4 flex flex-col gap-6">
      <h1>Meus Banners</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <Banner categories={['#cute 🥰', '#photography', '#girls', '#beatiful']}/>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Apresentação</h2>
        <p>Bem-vindo ao meu banner social, aqui nas minhas redes sociais falaremos de diversos assuntos sobre beleza, maquiagem e muito mais</p>
      </div>
      <div className="flex">
        <button>Editar banner</button>
        <button>compartilhar</button>
      </div>
    </div>
  )
}