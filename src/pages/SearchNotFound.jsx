import "../styles/searchNotFound.css";

export default function SearchNotFound() {
  return (
    <div className="search-page">
      <div className="search-card">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Resultados de búsqueda</p>

        {/* TÍTULO */}
        <h2>Agregar Nuevo Lugar</h2>

        {/* BUSCADOR */}
        <div className="search-bar-notfound">
          <input type="text" value="Tienda X" readOnly />
          <button>Buscar</button>
        </div>

        {/* RESULTADO VACÍO */}
        <div className="notfound-box">
          <div className="icon">🔍</div>

          <h3>No encontramos el lugar</h3>

          <p>
            No pudimos encontrar <strong>Tienda X</strong>. ¿Deseas agregar un
            nuevo lugar?
          </p>

          <button className="add-btn">Agregar lugar</button>
        </div>

        {/* AYUDA */}
        <p className="help-text">
          Si tienes algún problema para encontrar la URL, dirección o alguna
          otra dificultad al completar este formulario, puedes{" "}
          <strong>contactarnos</strong> y con gusto te ayudaremos.
        </p>
      </div>
    </div>
  );
}
