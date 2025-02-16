
export default function Game() {
  return (
    <div className="flex justify-center items-center h-lvh bg-zinc-800 text-white">
      <div>
        <h1 className="text-2xl font-bold mb-2">Biblioteca de Jogos</h1>
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" name="title" className='buttonStyles'/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cover">Capa: </label>
            <input type="text" id="cover" name="cover" className='buttonStyles'/>
          </div>
          <button type="submit" className="buttonStyles">Adicionar à biblioteca</button>
        </form>
      </div>
    </div>
  );
}