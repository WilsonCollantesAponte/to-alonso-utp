"use client";

import { LIBROS } from "@/public/data";
import { useState } from "react";
import Row from "./Row";

export default function Home() {
  const [libros, setLibros] = useState(LIBROS);
  const [librosSupport, setLibrosSupport] = useState(LIBROS);

  const [nuevoLibro, setNuevoLibro] = useState({
    NOMBRE: "",
    CODIGO_EDITORIAL: "",
    AUTOR: "",
    PAÍS_DEL_AUTOR: "",
    PRECIO: "",
    GÉNERO: "",
  });

  function handleNewBook(event) {
    const { name, value } = event.target;
    setNuevoLibro({ ...nuevoLibro, [name]: value });
  }

  return (
    <>
      <div>
        <div className=" p-8 bg-gray-300">
          <label className=" mx-10">Filtrar</label>
          <select
            className=" rounded"
            name="CODIGO_EDITORIAL"
            onChange={(e) => {
              if (e.target.value === "all") {
                setLibros(librosSupport);
              } else
                setLibros(
                  librosSupport.filter(
                    (value) => value.CODIGO_EDITORIAL === e.target.value
                  )
                );
            }}
          >
            <option value="all">Todos</option>
            <option value="E01">Editorial 1</option>
            <option value="E02">Editorial 2</option>
            <option value="E03">Editorial 3</option>
            <option value="E04">Editorial 4</option>
          </select>
        </div>
      </div>
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
          <Row
            key={index}
            book={book}
            libros={libros}
            setLibros={setLibros}
            librosSupport={librosSupport}
            setLibrosSupport={setLibrosSupport}
          />
        ))}
      </div>
      <div className=" flex flex-col justify-center items-center gap-3 bg-gray-300 py-2">
        <div>
          <label className=" px-3">NOMBRE</label>
          <input
            className=" rounded"
            type="text"
            name="NOMBRE"
            value={nuevoLibro.NOMBRE}
            onChange={handleNewBook}
          />
        </div>
        <div>
          <label className=" px-3">Editorial</label>
          <select
            className=" rounded"
            name="CODIGO_EDITORIAL"
            onChange={(e) => {
              setNuevoLibro({
                ...nuevoLibro,
                [e.target.name]: e.target.value,
              });
            }}
          >
            <option value="">Seleccionar editorial</option>
            <option value="E01">Editorial 1</option>
            <option value="E02">Editorial 2</option>
            <option value="E03">Editorial 3</option>
            <option value="E04">Editorial 4</option>
          </select>
        </div>
        <div>
          <label className=" px-3">AUTOR</label>
          <input
            className=" rounded"
            type="text"
            name="AUTOR"
            value={nuevoLibro.AUTOR}
            onChange={handleNewBook}
          />
        </div>
        <div>
          <label className=" px-3">PAÍS_DEL_AUTOR</label>
          <input
            className=" rounded"
            type="text"
            name="PAÍS_DEL_AUTOR"
            value={nuevoLibro.PAÍS_DEL_AUTOR}
            onChange={handleNewBook}
          />
        </div>
        <div>
          <label className=" px-3">PRECIO</label>
          <input
            className=" rounded"
            type="number"
            name="PRECIO"
            value={nuevoLibro.PRECIO}
            onChange={handleNewBook}
          />
        </div>
        <div>
          <label className=" px-3">GÉNERO</label>
          <input
            type="text"
            className=" rounded"
            name="GÉNERO"
            value={nuevoLibro.GÉNERO}
            onChange={handleNewBook}
          />
        </div>
        <button
          className=" py-1.5 px-3 text-white bg-indigo-500 rounded"
          onClick={() => {
            if (
              !nuevoLibro.CODIGO_EDITORIAL ||
              !nuevoLibro.AUTOR ||
              !nuevoLibro.GÉNERO ||
              !nuevoLibro.NOMBRE ||
              !nuevoLibro.PAÍS_DEL_AUTOR ||
              !nuevoLibro.PRECIO
            )
              return alert("Campos requeridos");
            setLibros([
              ...libros,
              { ...nuevoLibro, CODIGO: `L000${libros.length + 1}` },
            ]);
            setLibrosSupport([
              ...libros,
              { ...nuevoLibro, CODIGO: `L000${libros.length + 1}` },
            ]);
            setNuevoLibro({
              NOMBRE: "",
              CODIGO_EDITORIAL: "",
              AUTOR: "",
              PAÍS_DEL_AUTOR: "",
              PRECIO: "",
              GÉNERO: "",
            });
          }}
        >
          Añadir
        </button>
      </div>
    </>
  );
}
