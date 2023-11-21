import IngredientList from "./IngredientList.tsx";
import useFetch from "./UseFetch.tsx";

const Home = () => {
  const { data: ingredients, isPending, error} = useFetch('http://localhost:8000/ingredients')
    return (
    <>
      <div className="home">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {ingredients && <IngredientList ingredients={ingredients} title="All Ingredients" />}
      </div>
    </>
  );
};

export default Home;
