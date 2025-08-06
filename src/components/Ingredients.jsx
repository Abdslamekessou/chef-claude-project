export default function Ingredients({ ingredients, getRecipe, ref}) {
    
    const ingredientItems = ingredients.map(ing => (
        <li key={ing}>{ing}</li>
    ))

    return (
        
        <section>
        <div className="container">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
            {ingredientItems}
        </ul>

        {ingredients.length > 3 && (
            <div ref={ref} className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe}>Get a recipe</button>
            </div>
        )}
        </div>
        </section>
        
    )
    }
