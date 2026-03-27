export default function Form() {
  return (
    <section className="w-full mt-7 flex flex-col items-start gap-4 px-5">
      <h2 className=" text-start text-(--color-text) text-5xl font-bold mb-4 w-60">
        Let's Work <span className="text-(--color-text-span)">Together</span>
      </h2>

      {/* FORM */}
      <form action="" className="flex flex-col gap-5 w-full">

        {/* NOME */}
        <div className="flex flex-nowrap gap-2.5 w-full ">
          <div className="flex flex-col w-1/2 min-w-0">
            <label htmlFor="name" className="text-(--color-text-p)">Nome</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome..."  className="bg-(--background-area) rounded-lg p-3 text-(--color-placeholder)"/>
          </div>

        {/* EMAIL  */}
          <div className="flex flex-col w-1/2 min-w-0">
            <label htmlFor="email" className="text-(--color-text-p)" >E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." className="bg-(--background-area) rounded-lg p-3 text-(--color-placeholder)"/>
          </div>
        </div>

        {/* MENSAGEM  */}
        <div className="flex flex-col ">
          <label htmlFor="message" className="text-(--color-text-p)">Message</label>
          <textarea id="message" name="message" placeholder="Message" rows={5}  className="bg-(--background-area) rounded-lg p-3 text-(--color-placeholder)"/>
        </div>
         
         {/* BOTAO */}
        <button type="submit" className="w-full py-2 rounded-lg bg-(--color-highlight) text-(--color-text) font-bold hover:opacity-90 active:scale-95">Submit</button>

      </form>

    </section>
  )
}