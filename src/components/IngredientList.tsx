import React, { useState } from 'react';


const IngredientList = () => {
    const [visibleDetails, setVisibleDetails] = useState({});

    const toggleDetails = (ingredient) => {
        setVisibleDetails(prevDetails => ({
            ...prevDetails,
            [ingredient]: !prevDetails[ingredient]
        }));
    };

    return (
        <div className="ingredient-list">
            <div className="ingredient" onClick={() => toggleDetails('ingredient1')}>
                <h2>Ingredient 1</h2>
                {visibleDetails.ingredient1 && <p className="details">Details about Ingredient 1...</p>}
            </div>
            <div className="ingredient" onClick={() => toggleDetails('ingredient2')}>
                <h2>Ingredient 2</h2>
                {visibleDetails.ingredient2 && <p className="details">Details about Ingredient 2...</p>}
            </div>
            {/* Add more ingredients as needed */}
        </div>
    );
}

export default IngredientList;