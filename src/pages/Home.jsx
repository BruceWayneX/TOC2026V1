import "../styles/home.css";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import ReviewCardSimple from "../components/ReviewCardSimple";

export default function Home() {
  const categories = [
    { id: 1, name: "Restaurantes", image: "/img/restaurantes.jpg" },
    { id: 2, name: "Mascotas", image: "/img/mascotas.jpg" },
    { id: 3, name: "Belleza", image: "/img/belleza.jpg" },
    { id: 4, name: "Viajes", image: "/img/viajes.jpg" },
  ];

  const reviews = [
    {
      id: 1,
      user: "Juan Pérez",
      rating: 5,
      comment: "Excelente lugar para compartir, volveré pronto.",
    },
    {
      id: 2,
      user: "Ana López",
      rating: 4,
      comment: "Muy recomendado, gran experiencia.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="home">
        {/* HERO */}
        <section className="hero">
          <h1>Opiniones reales</h1>
          <p>para mejores decisiones</p>

          <div className="search-bar">
            <input placeholder="Buscar lugares..." />
            <button>Buscar</button>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="section">
          <h2>Categorías populares</h2>
          <div className="grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="section">
          <h2>Reseñas recientes</h2>
          <div className="grid">
            {reviews.map((review) => (
              <ReviewCardSimple key={review.id} review={review} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
