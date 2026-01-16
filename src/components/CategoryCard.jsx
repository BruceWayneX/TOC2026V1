// export default function CategoryCard({ category }) {
//     return (
//       <div className="card category-card">
//         <img 
//         src={category.image} 
//         alt={category.name} 
//         loading="lazy" 
//         decoding="async"
//          />
//         <span>{category.name}</span>
//       </div>
//     );
//   }


export default function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        decoding="async"
      />

      <div className="category-info">
        <h4>{category.name}</h4>
        <p>{category.count} lugares</p>
      </div>

      <button>{category.cta}</button>
    </div>
  );
}
