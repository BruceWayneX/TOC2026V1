import "../styles/createPlace.css";

export default function CreatePlace() {
  return (
    <div className="create-page">
      <div className="create-card">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Crear y Publicar Nuevo Lugar</p>

        {/* TITULOS */}
        <h2>Crear y Publicar Nuevo Lugar</h2>

        <h3>Agregar Nuevo Lugar</h3>
        <p className="subtitle">
          Completa la información del lugar que deseas agregar.
        </p>

        {/* FAQ */}
        <div className="faq">
          <span>¿Cómo creo una cuenta en TuOpinión Cuenta?</span>
          <span className="plus">+</span>
        </div>

        {/* FORMULARIO */}
        <form className="create-form">
          <label>Categoría</label>
          <select>
            <option>Selecciona una categoría...</option>
            <option>Restaurantes</option>
            <option>Hoteles</option>
            <option>Viajes</option>
            <option>Belleza</option>
          </select>

          <label>Ubicación</label>
          <input
            type="text"
            placeholder="Ej. Bogotá, Colombia"
          />

          <label>Descripción</label>
          <textarea
            rows="4"
            placeholder="Añade una descripción del lugar..."
          ></textarea>

          {/* SUBIR IMAGEN */}
          <div className="upload-box">
            <button type="button">📷 Subir imágenes</button>
          </div>

          {/* BOTÓN */}
          <button type="submit" className="publish-btn">
            Publicar Lugar
          </button>
        </form>

        <p className="help-text">
          Si no encuentras la respuesta que necesitas, puedes contactarnos y con
          gusto te ayudaremos.
        </p>
      </div>
    </div>
  );
}
