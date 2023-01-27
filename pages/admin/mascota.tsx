import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

interface IMascota {
  id: number;
  name: string;
  description: string;
  stock: string;
  imagen: string;
  precio: number;
  descuento: number;
  nombre: string;
}

const inititalStateMascota: IMascota = {
  id: 0,
  name: "",
  description: "",
  stock: "",
  imagen: "",
  precio: 0,
  descuento: 0,
  nombre: "",
};

export default function Mascota() {
  const [mascota, setmascota] = useState<IMascota[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/administrarmascota")
      .then((response) => {
        return response.json();
      })
      .then((response: any) => {
        setmascota(response);
      });
  });
  return (
    <>
      <AdminLayout>
        <div className="aside-tabla">
          <div className="buscador-and-tabla">
            <div className="Mas">
              <h3>Mascotas</h3>
            </div>

            <div className="busc">
              <div className="busc-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                  xmlSpace="preserve"
                  height="38"
                  width="36"
                >
                  <path
                    d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Buscar Mascota" />
            </div>

            <div className="cajita-add">
              <Link href={"/admin/mascota"}>
                <div className="butt">Add New</div>
              </Link>
            </div>
          </div>

          <div className="cuerpo-table">
            <table className="customers">
              <tbody>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Stock</th>
                  <th>Imagen</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Raza</th>
                  <th>Controles</th>
                </tr>
                {mascota.map((element) => {
                  return (
                    <tr>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.stock}</td>
                      <td>{element.imagen}</td>
                      <td>{element.precio}</td>
                      <td>{element.descuento}</td>
                      <td>{element.nombre}</td>
                      <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
