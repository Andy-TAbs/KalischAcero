"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NewsHeroDashboard = () => {
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Estado para la imagen
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  // Calcular las fechas mínimas y máximas al montar el componente
  useEffect(() => {
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setMonth(currentDate.getMonth() - 6);
    const futureDate = new Date();
    futureDate.setMonth(currentDate.getMonth() + 6);

    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    setMinDate(formatDate(pastDate));
    setMaxDate(formatDate(futureDate));
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    e.target.style.height = "auto"; // Resetea la altura
    e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta la altura al contenido
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string); // Establece la imagen para la vista previa
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Restablece si no hay imagen seleccionada
    }
  };

  return (
    <div className="min-h-screen max-h-296 md:pl-48 pt-20">
      <form className="space-y-6 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        {/* Input para el Título */}
        <label className="block">
          <span className="text-gray-700">Título</span>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Escribe el título"
          />
        </label>

        {/* Input para la Descripción */}
        <label className="block">
          <span className="text-gray-700">Descripción</span>
          <textarea
            className="mt-1 block w-full overflow-y-hidden resize-none px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Escribe la descripción"
            rows={1}
            value={description}
            onChange={handleInput}
            maxLength={1700}
          ></textarea>
        </label>

        {/* Input para la Fecha */}
        <label className="block">
          <span className="text-gray-700">Fecha</span>
          <input
            type="date"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            min={minDate} // Limite mínimo
            max={maxDate} // Limite máximo
          />
        </label>

        {/* Input para Subir Imagen */}
        <label className="block">
          <span className="text-gray-700">Subir Imagen</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </label>

        {/* Vista previa de la imagen */}
        <div className="mt-4">
          {imagePreview ? (
            <Image src={imagePreview} alt="Vista previa de la imagen" width={200} height={200} />
          ) : (
            <p>Sin Imagen seleccionada</p>
          )}
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default NewsHeroDashboard;
