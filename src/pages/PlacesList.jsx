import "../styles/placesList.css";
import PlaceCard from "../components/PlaceCard";

export default function PlacesList() {
  const places = [
    {
      id: 1,
      name: "Restaurante Palermo",
      reviews: 128,
      location: "Bogotá, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante1.jpg",
    },
    {
      id: 2,
      name: "Bar 2025",
      reviews: 82,
      location: "Bogotá, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante2.jpg",
    },
    {
      id: 3,
      name: "El Rinconcito",
      reviews: 54,
      location: "Medellín, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante3.jpg",
    },
    {
      id: 4,
      name: "Giardino Italiano",
      reviews: 43,
      location: "Cali, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante4.jpg",
    },
  ];

  return (
    <div className="places-page">
      <div className="places-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Lugares</p>

        {/* TÍTULO */}
        <h2>Listado de Lugares</h2>

        {/* BUSCADOR */}
        <div className="places-search">
          <input type="text" placeholder="Buscar lugares..." />
          <button>Buscar</button>
        </div>

        {/* FILTROS */}
        <div className="categories-filter">
          <button className="active">🍴 Restaurantes</button>
          <button>🐶 Mascotas 120</button>
          <button>💄 Belleza 97</button>
          <button>✈️ Viajes 594</button>
        </div>

        {/* LISTA */}
        <div className="places-grid">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        {/* PAGINACIÓN (UI) */}
        <div className="pagination">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
