"use client";

import { useState } from "react";

export default function Row({ book }) {
  const [libro, setLibro] = useState(book);
  console.log(libro);

  return (
    <div className="flex divide-x-2 divide-gray-500 border-b-2 border-gray-500 font-semibold overflow-auto">
      <div className="flex items-center">
        <div className=" py-2.5 pl-4 w-28">{libro.CODIGO}</div>
      </div>
      <div className="flex items-center">
        <div className=" py-2.5 pl-4 w-40">{libro.NOMBRE}</div>
      </div>
      <div className="flex items-center">
        <div className=" py-2.5 pl-4 w-52">{libro.CODIGO_EDITORIAL}</div>
      </div>

      <div className="flex items-center">
        <div className=" pl-1.5 w-44">{libro.AUTOR}</div>
      </div>

      <div className="flex items-center">
        <div className=" py-2.5 pl-4 w-44">{libro.GÉNERO}</div>
      </div>
      <div className="flex items-center">
        <div className=" pl-1.5 w-44">{libro.PAÍS_DEL_AUTOR}</div>
      </div>
      <div className="flex items-center">
        <div className=" pl-1.5 w-24">{libro.PRECIO}</div>
      </div>
      <div className="flex items-center">
        <div className=" py-2.5 pl-4">Opciones</div>
      </div>
    </div>
  );
}
// PAÍS_DEL_AUTOR
