import { useState ,useRef, useEffect } from 'react'
import './Main.css'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipeFromMistral } from './ai'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)

    useEffect(() => {
        if(recipe !== "" || recipeSection.current) {
            recipeSection.current.scrollIntoView({behavior : 'smooth'});
        }

        
    },[recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    async function handleGetRecipe() {
        const markdown = await getRecipeFromMistral(ingredients)
        setRecipe(markdown)
    }

    return (
        <div className='container'>
        <main>
        
        <form action={addIngredient}>
            <input
            className="ingridient-input"
            placeholder="e.g. oregano"
            type="text"
            name="ingredient"
            />
            <input
            className="ingridient-btn"
            type="submit"
            value="+ Add ingredient"
            />
        </form>

        {ingredients.length > 0 && (
            <Ingredients
            ingredients={ingredients}
            getRecipe={handleGetRecipe}
            ref={recipeSection}
            />
        )}

        {recipe && <Recipe content={recipe} />}
        
        </main>
        </div>
        
    )
}

