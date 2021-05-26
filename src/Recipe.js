import React from "react";
import style from "./recipe.module.css"

function Recipe({title,calories,image,ingredientLines}){
return(
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredientLines.map(ingredient =>(
            <li>{ingredient}</li>
            ))}
        </ol>
        <p>Calories:{calories}</p>
        <img className={style.image} src={image}/>
    </div>
)}

export default Recipe;