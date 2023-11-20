import { useParams } from "react-router-dom";
import IngredientList from "./IngredientList";


const SingleIngredient = ({ ingredients }) => {
    const { id } = useParams()
    const parcedID = parseInt(id)
    const ingredient = ingredients[parcedID]

    return (
        <div className="single-ingredients-details">
            <h1>{ ingredient.title }</h1>
            <p>{ ingredient.body }</p>
        </div>
    );
}
 
export default SingleIngredient;