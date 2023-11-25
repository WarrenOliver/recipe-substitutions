import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";
import { useEffect } from "react";

const SingleIngredient = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const {data: ingredient, isPending, error} = useFetch('http://localhost:8000/ingredients/'+ id)

    useEffect(() => {
        
    }, [id]);
    

    const goToPrevious = () => {
        const prevId = parseInt(id, 10) - 1;
        if (prevId > 0) {
            navigate(`/ingredients/${prevId}`);
            window.location.reload();
        }
    };
    
    const goToNext = () => {
        const nextId = parseInt(id, 10) + 1;
        navigate(`/ingredients/${nextId}`);
        window.location.reload();
    };

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
                    <button onClick={goToPrevious}>--- Previous Ingredient</button>
                    <button onClick={goToNext}>Next Ingredient --- </button>
                </article>
                
            )}

        </div>
    );
}
 
export default SingleIngredient;