import IngredientList from "./IngredientList.tsx";

const Home = () => {
    const ingredients = [
        { id: 1, title: "Flour", number: 2, body: "Two cups of all-purpose flour" },
        { id: 2, title: "Sugar", number: 1, body: "One cup of granulated sugar" },
        { id: 3, title: "Eggs", number: 3, body: "Three large eggs" },
        { id: 4, title: "Butter", number: 1, body: "One stick of unsalted butter" },
        { id: 5, title: "Baking Powder", number: 2, body: "Two teaspoons of baking powder" },
        { id: 6, title: "Milk", number: 1, body: "One cup of milk" },
        { id: 7, title: "Vanilla Extract", number: 1, body: "One teaspoon of vanilla extract" },
        { id: 8, title: "Salt", number: 1, body: "One teaspoon of salt" },
        { id: 9, title: "Cocoa Powder", number: 1, body: "One cup of unsweetened cocoa powder" },
        { id: 10, title: "Baking Soda", number: 1, body: "One teaspoon of baking soda" },
        { id: 11, title: "Brown Sugar", number: 1, body: "One cup of packed brown sugar" },
        { id: 12, title: "Yeast", number: 1, body: "One tablespoon of active dry yeast" },
        { id: 13, title: "Olive Oil", number: 1, body: "Two tablespoons of olive oil" },
        { id: 14, title: "Cinnamon", number: 1, body: "One tablespoon of ground cinnamon" },
        { id: 15, title: "Honey", number: 1, body: "Half a cup of honey" }
      ];
    
    return (
    <>
      <div className="home">
        <IngredientList ingredients={ingredients} title="All Ingredients" />
      </div>
    </>
  );
};

export default Home;
