'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

interface GameCardProps {
  title: string;
  cover: string;
  onRemove: () => void;
}

export default function GameCard({ title, cover, onRemove }: GameCardProps) {
  return (
    <div className="mb-4 flex gap-5 bg-neutral-700 p-4 rounded-2xl w-[48%]">
      <img src={cover} alt={title} className="w-32 h-32 object-cover rounded-2xl" />
      <div className="flex flex-col gap-4 justify-around">
        <h2>{title}</h2>
        <button className="buttonStyles !py-2" onClick={onRemove}>
          Romover Jogo
        </button>
      </div>
    </div>
  );
}

interface NewGameForm {
  addGame: (game: { title: string; cover: string }) => void;
}

export function NewGameForm({ addGame }: NewGameForm) {
  const [title, setTitle] = useState<string>('');
  const [cover, setCover] = useState<string>('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addGame({ title, cover });
    console.log({ title, cover });
    setTitle('');
    setCover('');
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.target.value);
  };

  return (
    <form className="flex items-end gap-[4%]" onSubmit={handleSubmit}>
      <NewGameInput type="title" label="Título" value={title} onChange={handleTitleChange} />
      <NewGameInput type="cover" label="Capa" value={cover} onChange={handleCoverChange} />
      <button type="submit" className="buttonStyles w-[32%]">
        Adicionar à biblioteca
      </button>
    </form>
  );
}

function NewGameInput({
  type,
  label,
  value,
  onChange,
}: {
  type: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2 w-[32%]">
      <label htmlFor={type}>{label}:</label>
      <input
        type="text"
        id={type}
        name={type}
        className="buttonStyles"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
