import AdminLayout from "../../../components/layout/AdminLayout";
export default function New() {
  return (
    <>
      <AdminLayout>
        <div className="cuerpo-new-mascota">
          <div className="titulo">
            <h3>Mascotas</h3>
          </div>
          <div className="cuerpo-nombre-stock">
            <div className="input-name">
              <div>Nombre: </div>
              <input type="text" placeholder="" />
            </div>

            <div className="input-raza">
              <div>Raza: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-description">
              <div>Description: </div>
              <textarea placeholder="" />
            </div>
          </div>
          <div className="input-imagen">
            <input type="file" />
          </div>
          <div className="cuerpo-precio-descont-stock">
            <div className="input-precio">
              <div>Precio: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-descuento">
              <div>Descuento: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-stock">
              <div>Stock: </div>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="cuerpo-peso-estatura-vida">
            <div className="input-peso">
              <div>Peso: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-estatura-promedio">
              <div>Estatura Promedio: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-vida">
              <div>Vida: </div>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="cuerpo-actividad-clima-caracter">
            <div className="input-actividad-fisica">
              <div>Actividad Física: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-clima-recomendado">
              <div>Clima Recomendado: </div>
              <input type="text" placeholder="" />
            </div>
            <div className="input-caracter">
              <div>Caracter: </div>
              <input type="text" placeholder="" />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
