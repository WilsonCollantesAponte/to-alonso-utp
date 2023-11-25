"use client";

import { useState } from "react";

export default function Row({
  book,
  libros,
  setLibros,
  librosSupport,
  setLibrosSupport,
}) {
  const [libro, setLibro] = useState({
    // NOMBRE: book.NOMBRE,
    // AUTOR: book.AUTOR,
    // PAÍS_DEL_AUTOR: book.PAÍS_DEL_AUTOR,
    // PRECIO: book.PRECIO,
    // GÉNERO: book.GÉNERO,
    NOMBRE: "",
    AUTOR: "",
    PAÍS_DEL_AUTOR: "",
    PRECIO: "",
    GÉNERO: "",
  });
  const [edit, setEdit] = useState(false);

  return (
    <>
      {!edit ? (
        <div className="flex divide-x-2 divide-gray-500 border-b-2 border-gray-500 font-semibold overflow-auto">
          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-28">{book.CODIGO}</div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-40">{book.NOMBRE}</div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-52">{book.CODIGO_EDITORIAL}</div>
          </div>
          <div className="flex items-center">
            <div className=" pl-1.5 w-44">{book.AUTOR}</div>
          </div>

          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-44">{book.GÉNERO}</div>
          </div>
          <div className="flex items-center">
            <div className=" pl-1.5 w-44">{book.PAÍS_DEL_AUTOR}</div>
          </div>
          <div className="flex items-center">
            <div className=" pl-1.5 w-24">{book.PRECIO}</div>
          </div>
          <div className="flex items-center">
            <button
              className=" px-1.5"
              onClick={() => {
                setEdit(true);
              }}
            >
              Actulizar
            </button>
            <button
              className=" pr-1.5"
              onClick={() => {
                setLibros(
                  libros.filter((book_1) => book_1.CODIGO !== book.CODIGO)
                );
                setLibrosSupport(
                  librosSupport.filter(
                    (book_1) => book_1.CODIGO !== book.CODIGO
                  )
                );
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex divide-x-2 divide-gray-500 border-b-2 border-gray-500 font-semibold overflow-auto">
          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-28">{book.CODIGO}</div>
          </div>
          <div className="flex items-center">
            <input
              className=" py-2.5 pl-4 w-40"
              type="text"
              value={libro.NOMBRE}
              onChange={(e) => {
                setLibro({ ...libro, NOMBRE: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 pl-4 w-52">{book.CODIGO_EDITORIAL}</div>
          </div>
          <div className="flex items-center">
            <input
              className=" py-2.5 pl-4 w-44"
              type="text"
              value={libro.AUTOR}
              onChange={(e) => {
                setLibro({ ...libro, AUTOR: e.target.value });
              }}
            />
          </div>

          <div className="flex items-center">
            <input
              className=" py-2.5 pl-4 w-44"
              type="text"
              value={libro.GÉNERO}
              onChange={(e) => {
                setLibro({ ...libro, GÉNERO: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center">
            <input
              className=" py-2.5 pl-4 w-44"
              type="text"
              value={libro.PAÍS_DEL_AUTOR}
              onChange={(e) => {
                setLibro({ ...libro, PAÍS_DEL_AUTOR: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center">
            <input
              className=" py-2.5 pl-4 w-24"
              type="number"
              value={libro.PRECIO}
              onChange={(e) => {
                setLibro({ ...libro, PRECIO: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center">
            <button
              className=" pr-1.5"
              onClick={() => {
                const bookFound = libros.find(
                  (book_1) => book_1.CODIGO === book.CODIGO
                );
                bookFound.AUTOR = libro.AUTOR;
                bookFound.NOMBRE = libro.NOMBRE;
                bookFound.PAÍS_DEL_AUTOR = libro.PAÍS_DEL_AUTOR;
                bookFound.PRECIO = libro.PRECIO;
                bookFound.GÉNERO = libro.GÉNERO;
                setLibros(libros);
                setLibrosSupport(libros);
                setEdit(false);
              }}
            >
              confirmar
            </button>
            <button className=" pr-1.5" onClick={() => setEdit(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
