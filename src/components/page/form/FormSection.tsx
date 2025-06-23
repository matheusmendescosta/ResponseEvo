import React from 'react';

type FormSectionProps = {
  id: string;
};

const FormSection = ({ id }: FormSectionProps) => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o nome"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite a descrição"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default FormSection;
