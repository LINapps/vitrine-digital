'use client';

import InputDate from "@/app/components/InputDate";
import InputEmail from "@/app/components/InputEmail";
import InputPassword from "@/app/components/InputPassword";
import InputText from "@/app/components/InputText";
import SButton from "@/app/components/SButton";

export default function SignupCreator() {
  return (
    <form className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <h1 className="text-xl">Criar conta</h1>
        <p className="text-sm font-light">
          Crie uma conta e comece a seguir somente conteúdos somente com assuntos que te interessam. 
          E você pode também criar um banner para atrair seguidores para sua rede social realmente 
          interessados nos seus conteúdos.
        </p>
      </section>
      <section className="flex flex-col gap-6">
        <InputText id="name" name="name" label="Nome completo" defaultValue=""/>
        <InputEmail id="email" name="email" label="E-mail" defaultValue=""/>
        <InputDate id="birthday" name="birthday" label="Data de nascimento" defaultValue=""/>
      </section>
      <section className="flex flex-col gap-6">
        <h1>Crie uma senha forte</h1>
        <InputPassword id="new-password" name="new-password" label="Senha" defaultValue=""/>
        <InputPassword id="repeat-password" name="repeat-password" label="Repita a senha" defaultValue=""/>
      </section>
      <section>
        <SButton content="criar conta"/>
      </section>
    </form>
  )
}