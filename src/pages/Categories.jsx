import "../styles/categories.css";
import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Restaurantes",
      count: 704,
      image: "/img/restaurantes.jpg",
      cta: "Ver restaurantes",
    },
    {
      id: 2,
      name: "Mascotas",
      count: 120,
      image: "/img/mascotas.jpg",
      cta: "Ver lugares para mascotas",
    },
    {
      id: 3,
      name: "Belleza",
      count: 97,
      image: "/img/belleza.jpg",
      cta: "Ver lugares de belleza",
    },
    {
      id: 4,
      name: "Viajes",
      count: 94,
      image: "/img/viajes.jpg",
      cta: "Ver lugares de viajes",
    },
    {
      id: 5,
      name: "Salud y Bienestar",
      count: 85,
      image: "/img/salud.jpg",
      cta: "Ver lugares de salud y bienestar",
    },
    {
      id: 6,
      name: "Entretenimiento",
      count: 66,
      image: "/img/entretenimiento.jpg",
      cta: "Ver lugares de entretenimiento",
    },
  ];

  return (
    <div className="categories-page">
      <div className="categories-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Categorías</p>

        {/* TÍTULO */}
        <h2>Categorías</h2>

        {/* BUSCADOR */}
        <div className="categories-search">
          <input placeholder="Buscar lugares..." />
          <button>Buscar</button>
        </div>

        {/* GRID */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
