const EDITORIALES = [
  {
    CODIGO: "E01",
    NOMBRE_EDITORIAL: "Editorial 1 ",
    PAIS: "España",
  },
  {
    CODIGO: "E02",
    NOMBRE_EDITORIAL: "Editorial 2 ",
    PAIS: "Estados unidos",
  },
  {
    CODIGO: "E03",
    NOMBRE_EDITORIAL: "Editorial 3 ",
    PAIS: "Italia",
  },
  {
    CODIGO: "E04",
    NOMBRE_EDITORIAL: "Editorial 4 ",
    PAIS: "Francia",
  },
];

const LIBROS = [
  {
    CODIGO: "L0001",
    NOMBRE: "Don Quijote de La Mancha I",
    CODIGO_EDITORIAL: "E01",
    AUTOR: "Miguel de Cervantes",
    GÉNERO: "Caballeresco",
    PAÍS_DEL_AUTOR: "España",
    PRECIO: "750",
  },
  {
    CODIGO: "L0002",
    NOMBRE: "Don Quijote de La Mancha II",
    CODIGO_EDITORIAL: "E01",
    AUTOR: "Miguel de Cervantes",
    GÉNERO: "Caballeresco",
    PAÍS_DEL_AUTOR: "España",
    PRECIO: "125",
  },
  {
    CODIGO: "L0003",
    NOMBRE: "Historias de Nueva Orleans",
    CODIGO_EDITORIAL: "E02",
    AUTOR: "WilliamFaulkner",
    GÉNERO: "Novela",
    PAÍS_DEL_AUTOR: "Estados Unidos",
    PRECIO: "675",
  },
  {
    CODIGO: "L0004",
    NOMBRE: "El príncipe",
    CODIGO_EDITORIAL: "E03",
    AUTOR: "Maquiavelo",
    GÉNERO: "Político",
    PAÍS_DEL_AUTOR: "Italia",
    PRECIO: "125",
  },
  {
    CODIGO: "L0005",
    NOMBRE: "Diplomacia",
    CODIGO_EDITORIAL: "E04",
    AUTOR: "Henry Kissinger",
    GÉNERO: "Político",
    PAÍS_DEL_AUTOR: "Alemania",
    PRECIO: "750",
  },
  {
    CODIGO: "L0006",
    NOMBRE: "Los Windsor",
    CODIGO_EDITORIAL: "E04",
    AUTOR: "Kitty Kelley",
    GÉNERO: "Biografías",
    PAÍS_DEL_AUTOR: "Gran Bretaña",
    PRECIO: "130",
  },
  {
    CODIGO: "L0007",
    NOMBRE: "El Último Emperador",
    CODIGO_EDITORIAL: "E03",
    AUTOR: "Pu-Yi",
    GÉNERO: "Autobiografías",
    PAÍS_DEL_AUTOR: "China",
    PRECIO: "995",
  },
  {
    CODIGO: "L0008",
    NOMBRE: "Don Quijote de La Mancha I ",
    CODIGO_EDITORIAL: "E01",
    AUTOR: "Miguel de Cervantes",
    GÉNERO: "Caballeresco",
    PAÍS_DEL_AUTOR: "España",
    PRECIO: "750",
  },
];

export default function Home() {
  return <div>Hi</div>;
}
