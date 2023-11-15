const IngredientList = ({ ingredients, title }) => {

  
  return (
    <div className="ingredient-list">
      <h1>{title}</h1>
      {ingredients.map((ingredient) => (
        <div className="ingredient-preview" key={ingredient.id}>
            <h2>{ingredient.title}</h2>
          {/* <div>Number of Substitutions: {ingredient.number}</div> */}
          {/* <button className="ingredient-button">Click to see substitutions:</button> */}
          
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
