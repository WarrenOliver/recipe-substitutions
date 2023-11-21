import { Link } from "react-router-dom";
const IngredientList = ({ ingredients, title }) => {

  
  return (
    <div className="ingredient-list">
      <h1>{title}</h1>
      {ingredients.map((ingredient) => (
        <div className="ingredient-preview" key={ingredient.id}>
          <Link className="ingredient-links" to={`/ingredients/${ingredient.id}`}>
            <h2>{ingredient.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
