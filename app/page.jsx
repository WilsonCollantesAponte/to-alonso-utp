"use client";

import { EDITORIALES, LIBROS } from "@/public/data";
import { useState } from "react";
import Row from "./Row";

export default function Home() {
  const [editoriales, setEditoriales] = useState(EDITORIALES);
  const [libros, setLibros] = useState(LIBROS);

  return (
    <div className=" mx-6 mb-3 border-x-2 border-gray-500 text-lg mt-10 rounded">
      <div className="flex divide-x-2 divide-gray-500 border-y-2 border-gray-500 font-semibold overflow-auto">
        <div className="flex items-center">
          <div className=" py-2.5 pl-4 w-28">CÓDIGO</div>
        </div>
        <div className="flex items-center">
          <div className=" py-2.5 pl-4 w-40">NOMBRE</div>
        </div>
        <div className="flex items-center">
          <div className=" py-2.5 pl-4 w-52">CODIGO EDITORIAL</div>
        </div>

        <div className="flex items-center">
          <div className=" pl-1.5 w-44">AUTOR</div>
        </div>

        <div className="flex items-center">
          <div className=" py-2.5 pl-4 w-44">GÉNERO</div>
        </div>
        <div className="flex items-center">
          <div className=" pl-1.5 w-44">PAÍS DEL AUTOR</div>
        </div>
        <div className="flex items-center">
          <div className=" pl-1.5 w-24">PRECIO</div>
        </div>
        <div className="flex items-center">
          <div className=" py-2.5 pl-4">Opciones</div>
        </div>
      </div>
      {libros.map((book, index) => (
        <Row key={index} book={book} libros={libros} setLibros={setLibros} />
      ))}
      {/* {clients.map((value, index) => {
            return (
              <ClientRow
                key={index}
                clientValue={value}
                setClients={setClients}
                clients={clients}
              />
            );
          })} */}
    </div>
  );
}
