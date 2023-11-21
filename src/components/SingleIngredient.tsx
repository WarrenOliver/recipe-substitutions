import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";


const SingleIngredient = () => {
    const { id } = useParams()
    const {data: ingredient, isPending, error} = useFetch('http://localhost:8000/ingredients/'+ id)

    return (
        <div className="single-ingredients-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {ingredient && (
                <article>
                    <h2>{ ingredient.title }</h2>
                    <div>
                        { ingredient.body }
                    </div>
                </article>
            )}

        </div>
    );
}
 
export default SingleIngredient;